import {connect} from "@/dbconnect/dbconnect";
import productsDetails from "@/models/productModels";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest) {
    try {
            const reqBody = await request.json()
            const {productId} = reqBody

        const product = await productsDetails.findById(productId);

        return NextResponse.json({
            data: product
        });
    } catch (error) {
        console.error('Error occurred while fetching product:', error);
        return NextResponse.json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}