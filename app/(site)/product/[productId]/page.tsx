"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'next/navigation'
import Rating from "../../_components/rating_star"
import "../../../globals.css"


interface ProductDetailProps{
    title: string,
    img_url: string,
    subtitle: string,
    price: number,
    reviews: number,
    rating: number,
    head: string,
    bestseller: Boolean,
    _id: string,
    description: string
}

const ProductPage = () => {
    const [productDetail, setProductDetails] = useState<ProductDetailProps | null>()

    

    const id = useParams()    
    const reqData = async()=> {

        try {
            const res = await axios.post("/api/getProducts", id);
            setProductDetails(res.data.data)    
        } catch (error) {
            console.log(error)
        }
    }

    const Review = (`(${productDetail?.reviews})`)
    
    useEffect(()=> {
        reqData()
    }, [])

    return ( 
        <div className="md:px-[4%] h-full lg:px-[14%] mb-20 px-4 border-t border-t-gray-200 flex flex-col w-full pb-20">
            <div className="py-4">
                <p className="text-sm text-gray-600">Home / All products / {productDetail?.title}</p>
            </div>
            <div className="md:flex w-full flex-row">
                        {/* left side image div  */}
                    <div className="gap-3 flex flex-col ">
                        <div className="border border-gray-300 lg:w-[600px] w-[450px] items-center justify-center flex lg:h-[600px] rounded-xl">
                            <img
                                src={productDetail?.img_url}
                                className="w-[85%] object-cover rounded-full"
                            />
                        </div>
                        <div className="flex gap-3">
                            <div className="h-28 w-28 border border-gray-300 rounded-xl items-center justify-center flex">
                                <img src={productDetail?.img_url}
                                className="rounded-full w-24"
                                />
                            </div>
                            <div className="h-28 w-28 border border-gray-300 rounded-xl items-center justify-center flex">
                                <img src={productDetail?.img_url}
                                className="rounded-full w-24"
                                />
                            </div>
                        </div>
                    </div>
                        {/* right side context div  */}
                <div className="w-full px-16 gap-7 flex flex-col">
                    <p className="text-xl font-[500]">${productDetail?.price}</p>
                    <p className="text-3xl font-[500]">{productDetail?.title}</p>
                    <div className="flex gap-3 text-sm">
                        <Rating rating={productDetail?.rating!}/>
                        <p>{Review === "(undefined)"? `(0)`: Review}</p>
                    </div>
                    <p>{productDetail?.subtitle}</p>
                    <p>{productDetail?.description}</p>
                </div>
            </div>
        </div>
     );
}

export default ProductPage;