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
        <div className=" flex-col relative w-72 border border-gray-300 items-center justify-center flex rounded-xl pb-8">
            <div className="w-72 h-72 items-center justify-center flex">
                <Image
                    src={img}
                    alt={title}
                    height={240}
                    width={240}
                    className=" hover:w-64 transition-all rounded-full"
                />
            </div>
            <div className=" absolute top-2 right-2">
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