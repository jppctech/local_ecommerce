import { connect } from "@/dbconnect/dbconnect";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

connect();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();

        const {
            email,
            password
        } = await reqBody;

        const user = await User.findOne({email: email});

        if(!user){
            return NextResponse.json({
                data: 'notFound'
            })
        }

        const validPass = await bcrypt.compare(password, user.password);

        if(!validPass){
            return NextResponse.json({
                data: 'invalidPassword'
            })
        }

        const tokenData = {
            id: user._id,
            email: user.email
        }
        
        const token = jwt.sign(tokenData, process.env.SECRET_TOKEN!, {expiresIn: '1d'});

        const response = NextResponse.json({
            data: 'true',
            message: "Logged In Success",
            success: true
           }) 

        response.cookies.set("token", token, {
            httpOnly: true
           })
           return response

    } catch (error) {
        return NextResponse.json({
            error: [error, 'something went wrong while logging in']
        },{
            status: 500
        })
    }
}