import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
    request: Request,
) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        console.log(body);

        const { id, date } = body;

        if (!currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        if (currentUser.hikeIds.includes(id)) {
            return new NextResponse('Already added', { status: 400 });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                hikeIds: {
                    push: id
                },
                hikeDates: {
                    push: date
                }
            }
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.log(error, 'ERROR_HIKE_POST');
        return new NextResponse('Internal Error', { status: 500 });
    }
}

export async function GET(
    request: Request,
) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: currentUser.id
            }
        });

        if (!user) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        // every user has hikeIds and hikeDates
        const { hikeIds, hikeDates } = user;
        

        return NextResponse.json({
            hikeIds,
            hikeDates
        });

    } catch (error) {
        console.log(error, 'ERROR_HIKE_GET');
        return new NextResponse('Internal Error', { status: 500 });
    }
}