"use client"

import { useEffect, useState } from "react";
import ProductCards from "./product_card";
import axios from "axios";
import ProductCardSkeleton from "./productsComponents/product_cardSkeleton";

interface productDetailProps{
    title: string,
    img_url: string,
    subtitle: string,
    price: number,
    reviews: number,
    rating: number,
    head: string,
    bestseller: Boolean
}

const BestProductsSection = () => {

    const [loading, setloading] = useState(true)

    const [productDetail, setProductDetails] = useState<productDetailProps[]>([])
    const reqData = async()=> {
        try {
            const res = await axios.post("/api/getProductDetails");
            setProductDetails(res.data.data)   
            setloading(false) 
        } catch (error) {
            console.log(error)
        }
    }

    const bestSellers = productDetail.filter(function(best){
        return best.bestseller === true
    })
    
    useEffect(()=> {
        reqData()
    }, [])


    return ( 
        <div className="w-full flex flex-col gap-10 md:px-[4%] lg:px-[14%] mb-20 px-4 items-center md:items-start">
          <div className="w-full flex justify-between mt-24">
            <p className="text-3xl font-[450]">Best Sellers</p>
            <button className="text-xl hover:underline underline-offset-4">View all products</button>
          </div>
            {loading && <div className="flex w-full">
                <ProductCardSkeleton/>
                <ProductCardSkeleton/>
                <ProductCardSkeleton/>
                <ProductCardSkeleton/>
                </div>}
            {!loading && <div className="flex w-full gap-4 flex-wrap justify-center md:justify-normal ">
                {bestSellers.map((link)=>(
                    <ProductCards
                    title={link.title}
                    description={link.subtitle}
                    img_url={link.img_url}
                    price={link.price}
                    reviews={link.reviews}
                    rating={link.rating}
                    head={link.head}
                />
                ))}
            </div>}
      </div>
     );
}
 
export default BestProductsSection;

