import { connect } from "@/dbconnect/dbconnect"
import ProductDetails from "@/models/productModels";
import { NextRequest, NextResponse } from "next/server";

connect()
export async function POST(request: NextRequest){
    try {
       const reqbody = await request.json()
       const {
        title,
        img_url,
        img_url1,
        img_url2,
        img_url3,
        img_url4,
        img_url5,
        price,
        oldPrice,
        category,
        subtitle,
        description,
        isStocked,
        rating,
        reviews,
        head,
        bestseller,
        allergens
       } = reqbody

      const newProduct = new ProductDetails({
        title,
        img_url,
        img_url1,
        img_url2,
        img_url3,
        img_url4,
        img_url5,
        price,
        oldPrice,
        category,
        subtitle,
        description,
        isStocked,
        rating,
        reviews,
        head,
        bestseller,
        allergens
      })

    await newProduct.save();
    console.log('added')

    return NextResponse.json({
        message: "New product added successfully",
        success: true,
        newProduct
    })
        
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500})
        
    }
}