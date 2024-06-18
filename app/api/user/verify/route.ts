import User from "@/models/userModels";
import { connect } from "@/dbconnect/dbconnect";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();

        const {verifyId} = await reqBody;

        const user = await User.findOneAndUpdate({verifyToken: verifyId,
            verifyTokenExpiry: {$gt: Date.now()}
        },{
            $set: {
                isVerified: true 
            },
            $unset: {
                verifyToken: "",
                verifyTokenExpiry: ""
            }
        },
        { 
            new: true 
        })


        if(!user){
            await User.findOneAndDelete({verifyToken: verifyId});
            
            return NextResponse.json({
                data: 'expired',
                success: false,
                message: "Verify token has expired!"
            })
        }

        return NextResponse.json({
            user,
            data: 'true',
            success: true,
            message: "user has been verified successfully."
        })
    } catch (error) {
        return NextResponse.json({
            error: [error, "cannot verify your email !"]
        },{
            status: 500
        })
    }
}