import { connect } from "@/dbconnect/dbconnect";
import ProductDetails from "@/models/productModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { searchString } = reqBody;

        // Ensure searchString is provided
        if (!searchString) {
            return NextResponse.json({
                error: 'Search string is required'
            }, {
                status: 400
            });
        }

        // Create a MongoDB query to search across multiple fields
        const searchRegex = new RegExp(searchString, 'i'); // 'i' makes it case-insensitive
        const products = await ProductDetails.find({
            $or: [
                { title: { $regex: searchRegex } },
                { description: { $regex: searchRegex } },
                { category: { $regex: searchRegex } },
                { subtitle: { $regex: searchRegex } }
            ]
        });

        return NextResponse.json({
            data: products
        });
    } catch (error) {
        console.error('Error occurred while searching products:', error);
        return NextResponse.json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
