import { connect } from "@/dbconnect/dbconnect";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest) {
    try {
        try {
            const userId = getDataFromToken(request);
            const user = await User.findOne({_id: userId});
            return NextResponse.json({
                data: user,
                success: true,
                message: "user found"
            })
        } catch (error) {
            return NextResponse.json({
                success: false,
                message: 'user not found'
            })
        }
    } catch (error) {
        return NextResponse.json({
            error: [error, "something went wrong will getting data from database"]
        },{
            status: 502
        })
    }
}