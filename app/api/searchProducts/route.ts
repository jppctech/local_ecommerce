import { connect } from "@/dbconnect/dbconnect";
import ProductDetails from "@/models/productModels";
import { NextRequest, NextResponse } from "next/server";

connect();

// Define the interface for the request body
interface SearchRequestBody {
    searchString: string;
}

// Define the interface for the product data
interface Product {
    title: string;
    description: string;
    category: string;
    subtitle: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const reqBody: SearchRequestBody = await request.json();
        const { searchString } = reqBody;

        // Ensure searchString is provided
        if (!searchString) {
            return NextResponse.json({
                error: 'Search string is required'
            }, {
                status: 400
            });
        }

        // Split search string into individual keywords
        const keywords: string[] = searchString.split(' ');

        // Create a MongoDB query to search across multiple fields for any keyword
        const searchConditions = keywords.map(keyword => {
            const searchRegex = new RegExp(keyword, 'i'); // 'i' makes it case-insensitive
            return {
                $or: [
                    { title: { $regex: searchRegex } },
                    { description: { $regex: searchRegex } },
                    { category: { $regex: searchRegex } },
                    { subtitle: { $regex: searchRegex } }
                ]
            };
        });

        // Use $or at the top level to match any product that satisfies any of the conditions
        const products: Product[] = await ProductDetails.find({ $or: searchConditions });

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
