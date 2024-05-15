"use client"

import { useEffect, useState } from "react";
import GoesWellWithCard from "./GoesWellWith-card";
import axios from "axios";

interface productDetailProps{
    title: string,
    img_url: string,
    price: number,
    category: string
}

const GoesWellWith = ({
    category
}:{
    category: string
}) => {
    
    const [productDetail, setProductDetails] = useState<productDetailProps[]>([])

    const reqData = async()=> {
        try {
            const res = await axios.post("/api/getProductDetails", category);
            setProductDetails(res.data.data)   
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        reqData()
    }, [])

    return ( 
        <div className="flex flex-col w-full py-10 gap-6">
            <p className="text-lg font-[500]">
                Goes Well With {category}
            </p>
            <div className="flex flex-col gap-4">
                {productDetail.slice(0, 3).map((link)=>(
                    <div key={link.title}>
                        <GoesWellWithCard title={link.title} price={link.price} img_url={link.img_url}/>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default GoesWellWith;