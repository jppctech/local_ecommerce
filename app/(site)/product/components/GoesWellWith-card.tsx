import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const GoesWellWithCard = ({
    title,
    price,
    img_url
}:{
    title: string,
    price: number,
    img_url: string
}) => {
    return ( 
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-4">
                    <div className="border border-gray-300 w-24 rounded-lg h-26 items-center justify-center flex">
                        <Image 
                            alt="suggestion products"
                            width={500}
                            height={500}
                            src={img_url} 
                            className="w-24 rounded-full"
                        />
                    </div>
                    <p>{title}</p>
                </div>
                <Button variant={"outline"} className="w-28 p-5 rounded-full md:ml-6 text-md border-black hover:bg-black hover:text-white">
                    Buy now
                </Button>
            </div>
            <Separator/>
        </div>
     );
}
 
export default GoesWellWithCard