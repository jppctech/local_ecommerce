import User from "@/models/userModels";
import { USERconnect } from "@/userdbConnect/USERConnect";
import { NextRequest, NextResponse } from "next/server";

USERconnect();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();

        const {verifyId} = await reqBody;

        await User.findOneAndUpdate({verifyToken: verifyId},{
            isVerfied: true,
            verifyToken: undefined,
            verifyTokenExpiry: undefined,
        })

        return NextResponse.json({
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