import { dbConfig } from "@/dbConfig/dbConfig";
import {User} from "@/models/user.model"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response:NextResponse){
    try {
        const reqBody = request.json()
        const {userName , email, password} = reqBody

    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}



dbConfig()