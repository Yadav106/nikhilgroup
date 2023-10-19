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

        const { id } = body;

        if (!currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        let idToBeRemoved: number;
        let dateToBeRemoved: number;

        currentUser.hikeIds.map((hikeId, index) => {
            if (hikeId === id) {
                idToBeRemoved = index;
                dateToBeRemoved = index;
            }
        })

        const updatedHikeIds = currentUser.hikeIds.map((hikeId, index) => {
            if (index !== idToBeRemoved) {
                return hikeId;
            }
        });

        const updatedHikeDates = currentUser.hikeDates.map((hikeDate, index) => {
            if (index !== dateToBeRemoved) {
                return hikeDate;
            }
        });

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                // @ts-ignore
                hikeIds: updatedHikeIds,
                // @ts-ignore
                hikeDates: updatedHikeDates
            }
        });

        const { hikeIds, hikeDates } = updatedUser;
        
        return NextResponse.json(
            {
                hikeIds,
                hikeDates
            }
        );
    } catch (error) {
        console.log(error, 'ERROR_HIKE_DELETE');
        return new NextResponse('Internal Error', { status: 500 });
    }
}