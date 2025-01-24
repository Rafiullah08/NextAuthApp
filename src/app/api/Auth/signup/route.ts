import { dbConfig } from "@/dbConfig/dbConfig";
import {User} from "@/models/user.model"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response:NextResponse){
    try {
        const reqBody = request.json()
        const {userName , email, password} = reqBody
        
        const chekUser = await User.findOne({email})

        if(chekUser){
            return new NextResponse({message :"user with tis email elready exists" })
        }
        


    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}

dbConfig()