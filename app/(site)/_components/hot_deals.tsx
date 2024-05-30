import { Button } from "@/components/ui/button";
import Image from "next/image";

const HotDeals = () => {

    const data = [
        {
            topTitle: "Fresh everyday",
            title: "Finest Bread",
            color: "#f5efdf",
            img: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/promo_bread_27dc722f-4f6d-4b81-b75d-542077a4156a.jpg?crop=center&height=420&v=1656509679&width=420"
        },
        {
            topTitle: "Just arrived!",
            title: "Superfoods",
            color: "#f7e5e4",
            img: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/promo_superfoods_242a5de7-13e1-48e3-a56e-6c3013431280.jpg?crop=center&height=420&v=1656509787&width=420"
        },
        {
            topTitle: "Collection",
            title: "Pure Organic",
            color: "#e2edf2",
            img: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/promo_pure_7c759baf-9767-4fc0-bee1-99e0ad3d0a9c.jpg?crop=center&height=420&v=1656509601&width=420"
        }
    ]
    return ( 
        <div className="w-full flex flex-col gap-10 md:px-[4%] lg:px-[14%] mb-20 px-4 items-center md:items-start ">
            <p className="text-3xl font-[450]">Hot Deals!</p>

            <div className="w-full flex flex-wrap justify-center md:justify-between gap-6">
                {data.map((link)=>(
                    <div className="lg:w-[433px] lg:h-[655px] md:w-[30%] pb-6 lg:pb-0 rounded-xl"
                    key={link.title}
                    style={{backgroundColor: link.color}}>
                    <Image
                        alt="Hot deals"
                        width={1000}
                        height={1000}
                        src={link.img}
                        className="rounded-xl object-contain"
                    />
                    <div className="flex items-center w-full flex-col gap-6 mt-8">
                        <p className="text-gray-700">{link.topTitle}</p>
                        <p className="text-3xl font-[500]">{link.title}</p>
                        <Button className=" bg-opacity-0 text-black rounded-full w-[75%] h-14 border border-black text-xl hover:text-white hover:bg-black">Show more</Button>
                    </div>
                </div>
                ))}
            </div>
        </div>
     );
}
 
export default HotDeals;