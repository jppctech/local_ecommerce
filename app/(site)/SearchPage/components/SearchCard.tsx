"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchCard = ({
    img,
    title,
    head,
    price,
    id
}: {
    img: string,
    title: string,
    head: string,
    price: number,
    id: string
}) => {

    const router = useRouter();

    const handleRedirect =()=>{
        router.push(`/product/${id}`)
    }
    return ( 
        <div className=" flex-col relative w-72 border border-gray-300 items-center justify-center flex rounded-xl pb-8 cursor-pointer" onClick={handleRedirect}>
            <div className="w-72 h-72 items-center justify-center flex">
                <Image
                    src={img}
                    alt={title}
                    height={240}
                    width={240}
                    className=" hover:w-64 transition-all rounded-full"
                />
            </div>
            <div className={
                        head==="NEW"? "absolute top-0 right-0  bg-green-700 w-12 items-center flex justify-center rounded-md text-white text-[13px] h-6 mt-4 mr-4"
                    : head==="PREORDER NOW"? "absolute top-0 right-0  bg-[#A36754] w-28 items-center flex justify-center rounded-md text-white text-[12px] h-6 mt-4 mr-4"
                    : head===""?"":"absolute top-0 right-0  bg-red-600 w-12 items-center flex justify-center rounded-md text-white text-[14px] h-6 mt-4 mr-4"
                }>
                    {head}
                </div>
            <div className="w-full px-4 flex flex-col gap-2">
                <p>
                    ${price}
                </p>
                <p className="text-xl font-[500]">
                    {title}
                </p>
                <Button className="bg-white text-black border border-black rounded-full h-12 hover:text-white" onClick={handleRedirect}>Buy Now</Button>
            </div>
        </div>
     );
}
 
export default SearchCard;