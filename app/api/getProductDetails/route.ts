import {connect} from "@/dbconnect/dbconnect";
import productsDetails from "@/models/productModels";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){

        const products = await productsDetails.find();
        
        return NextResponse.json({
            data: products
        })
}