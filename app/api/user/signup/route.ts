import { connect } from "@/dbconnect/dbconnect";
import Mailer from "@/helper/mailer";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {
            first_name,
            last_name,
            email,
            password
        } = await reqBody;

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({
                message: "user already exists",
                data: "exists"
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = await new User({
            first_name,
            last_name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        await Mailer( {email, emailType: "verify", first_name} );

        return NextResponse.json({
            success: true,
            newUser,
            data: 'true'
        })

    } catch (error) {
        return NextResponse.json({
            error: [error, "issue while signing you up"]
        },{
            status: 500
        })
    }
    
}