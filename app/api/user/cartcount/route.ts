import { connect } from "@/dbconnect/dbconnect";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest) {
    try {
        const userId = getDataFromToken(request);

        const user = await User.findById(userId);

        if (!user){
            return NextResponse.json({
                data: 0
            })
        }

        const cartItemCount = user.cart_items.reduce((total: number, item: any) => total + item.itemQuantity, 0);

        return NextResponse.json({
            data: cartItemCount
        })

    } catch (error) {
        return NextResponse.json({
            error: error
        },{
            status: 500
        })
    }
}