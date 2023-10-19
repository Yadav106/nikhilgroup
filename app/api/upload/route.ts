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
        const { url } = body;

        const user = await prisma.user.findUnique({
            where: {
                id: currentUser.id
            }
        });

        if (!user) return new NextResponse('Unauthorized', { status: 401 });

        // add images to the list of images by user {every user has an array of strings images}

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                images: {
                    push: url
                }
            }
        });

        return new NextResponse('Success', { status: 200 })

    } catch (error) {
        console.log(error, 'UPLOAD ERROR');
        return new NextResponse('Internal Error', { status: 500 });
    }
}

export async function GET(
    request: Request
) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) return new NextResponse('Unauthorized', { status: 401 });

        // get all images by all users also add the user id

        const users = await prisma.user.findMany({
            select: {
                id: true,
                images: true,
                name: true,
                image: true
            }
        });

        const images = users.map(user => {
            return user.images.map(image => {
                return {
                    id: user.id,
                    url: image,
                    name: user.name,
                    image: user.image
                }
            })
        }).flat();

        return new NextResponse(JSON.stringify(images), {
            headers: {
                'content-type': 'application/json'
            }
        });

    } catch (error) {
        console.log(error, 'UPLOAD ERROR');
        return new NextResponse('Internal Error', { status: 500 });
    }
}