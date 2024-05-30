"use client"

import axios from "axios";
import AdminProductCard from "./components/productCard";
import { useEffect, useState } from "react";
import { ProductTable } from "@/components/component/datatable";

interface productDetailProps{
    title: string,
    img_url: string,
    subtitle: string,
    price: number,
    reviews: number,
    rating: number,
    head: string,
    bestseller: Boolean,
    _id: string
}

const AdminPanel = () => {

    const [productDetail, setProductDetails] = useState<productDetailProps[]>([])
    const reqData = async()=> {
        try {
            const res = await axios.post("/api/getProductDetails");
            setProductDetails(res.data.data)   
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        reqData()
    }, [])

    const handleDelete = async (productId: string) => {
        try {
            const res = await axios.post("/api/removeItems", { productId });
            console.log(res.data.data);
            // Update the state to remove the deleted product
            setProductDetails(prevDetails => prevDetails.filter(product => product._id !== productId));
        } catch (error) {
            console.log(error);
        }
    };

    return ( 
        <div className="flex w-full flex-col">
            {/* Header  */}
            <div className="w-full flex h-20 bg-cyan-600 items-center px-[14%] text-white justify-between">
                <p className="text-3xl font-[500] font-serif">Admin Panel</p>
            </div>
            {/* Body  */}
            <div className="w-full px-[14%] py-4 gap-4 flex flex-col">
                {productDetail.map((link)=>(
                    <div key={link._id}>
                        <AdminProductCard
                            img_url={link.img_url}
                            title={link.title}
                            price={link.price}
                            productId={link._id}
                            onDelete={handleDelete}
                        />
                    </div>
                ))}
                {/* <ProductTable/> */}
            </div>
        </div>
     );
}
 
export default AdminPanel;