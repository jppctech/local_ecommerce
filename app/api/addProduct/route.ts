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
        sub_img,
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
        allergens,
        tags
       } = reqbody

      const newProduct = new ProductDetails({
        title,
        img_url,
        sub_img,
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
        allergens,
        tags
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