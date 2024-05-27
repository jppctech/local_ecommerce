"use client"

import { Button } from "@/components/ui/button";
import axios from "axios";
import { SquarePen, Trash } from "lucide-react";

const AdminProductCard = ({
    img_url,
    title,
    price,
    productId,
    onDelete
}:{
    img_url: string,
    title: string,
    price: number,
    productId: string,
    onDelete: (productId: string) => void
}) => {

    const reqData = async () => {
        try {
            onDelete(productId);
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div className="flex items-center lg:w-[800px] px-4 rounded-xl border border-gray-300 shadow-lg justify-evenly">
            <img
                src={img_url}
                className="w-20"
            />
            <p className="w-64">{title}</p>
            <p>$ {price}</p>
            <Button variant={"destructive"} onClick={reqData}>
                <Trash size={20}/>
            </Button>
            <SquarePen/>
        </div>
     );
}
 
export default AdminProductCard;