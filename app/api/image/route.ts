import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
    request: Request
) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) return new NextResponse('Unauthorized', { status: 401 });

        const body = await request.json();
        console.log(body, 'BODY');
        
        const { bigImage } = body;

        console.log(bigImage, 'URL');

        const user = await prisma.user.findUnique({
            where: {
                id: currentUser.id
            }
        });

        if (!user) return new NextResponse('Unauthorized', { status: 401 });

        // remove the image from the list of images of currentUser

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                images: {
                    set: user.images.filter(image => image !== bigImage)
                }
            }
        });

        return new NextResponse('Success', { status: 200 })

    } catch (error) {
        console.log(error, 'UPLOAD ERROR');
        return new NextResponse('Internal Error', { status: 500 });
    }
}