import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function GET(
    request: Request,
) {
    console.log('GET_HIKES');
    
    try {
        // find all hikes
        const hikes = await prisma.hike.findMany();

        console.log(hikes);

        return NextResponse.json(hikes);
    } catch (error) {
        console.log(error, 'ERROR_HIKES_GET');
        return new NextResponse('Internal Error', { status: 500 });
    }
}
