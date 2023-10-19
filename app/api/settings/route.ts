import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
    request: Request,
) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        console.log(body, 'BODY_SETTINGS_POST');
        
        const { name, phone, image } = body;

        const phoneRegex = /^\d{9,10}$/
        if (!phoneRegex.test(phone)) {
            return new NextResponse('Invalid phone number', { status: 400 });
        }
        
        if (!currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                name,
                phone,
                image
            }
        });

        return NextResponse.json(updatedUser);
    } catch (error:any) {
        console.log(error, 'ERROR_SETTINGS_POST');
        return new NextResponse('Internal Error', { status: 500 });
    }
}