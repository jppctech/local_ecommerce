import {connect} from "@/dbconnect/dbconnect";
import User from "@/models/userModels"
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){
        try {

            const reqBody = await request.json()
            const {email, password} = reqBody
            // validation
            console.log(reqBody);

            const user = await User.findOne({email})
            

            if (!user) {
                return NextResponse.json({error: "User does not exists"}, {status: 400})
            }
            console.log("User exits");


            if(!password){
                return NextResponse.json({error: "Check your credentials"}, {status: 400})
            }
            
           const response = NextResponse.json({
            message: "Logged In Success",
            success: true
           })
           return response

            
        } catch (error: any) {
            return NextResponse.json({error: error.message},
                {status: 500})
             
        }
}
