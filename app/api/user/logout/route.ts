import { connect } from "@/dbconnect/dbconnect";
import { NextResponse } from "next/server";

connect();

export async function POST() {
    try {
        const response = NextResponse.json({
            message: "Logout Successfully",
            success: true
        })
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        },)    

        return response;
        
    } catch (error) {
        return NextResponse.json({
            error: error
        },{
            status: 501
        })
    }
}