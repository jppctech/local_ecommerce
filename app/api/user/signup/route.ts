import { USERconnect } from "@/dbconnect/dbconnect";
import Mailer from "@/helper/mailer";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

USERconnect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {
            first_name,
            last_name,
            email,
            password
        } = reqBody;

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({
                error: "user already exists"
            })
        }

        const newUser = await new User({
            first_name,
            last_name,
            email,
            password
        });

        await newUser.save();

        await Mailer( {email, emailType: "verify", first_name} );

        return NextResponse.json({
            success: true,
            newUser
        })

    } catch (error) {
        return NextResponse.json({
            error: [error, "issue while signing you up"]
        },{
            status: 500
        })
    }
    
}