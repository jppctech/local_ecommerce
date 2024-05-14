import { Button } from "@/components/ui/button";
import Rating from "./rating_star";

const ProductCards = ({
    price,
    title,
    rating,
    reviews,
    description,
    img_url,
    head
}:{
    price: number,
    title: string,
    rating: number,
    reviews: number,
    description: string,
    img_url: string,
    head: string
}) => {
    const images = [
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/milk-free.png?crop=center&height=32&v=1654693369&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/eggs-free.png?crop=center&height=32&v=1654693369&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/apple-1069_1662a7dc-9d78-40f0-ad21-0d60d427a65d.png?crop=center&height=32&v=1656493437&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Eco_f7523587-bd10-46a8-9311-a125db925258.png?crop=center&height=32&v=1654250639&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Soya-free_28429413-b9fa-41da-bb09-53785688b1e0.png?crop=center&height=32&v=1655796596&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Organic_7e1deabb-4002-4a38-aedc-4f5febec3a72.png?crop=center&height=32&v=1655795934&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Celery_4187368e-801a-492b-b78b-fc78ff14577f.png?crop=center&height=32&v=1660649172&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Peanuts.png?crop=center&height=32&v=1660649081&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Nuts.png?crop=center&height=32&v=1660649060&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Gluten_0cd5b727-d9fe-4595-953b-44d39dba88ee.png?crop=center&height=32&v=1660649125&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Corn.png?crop=center&height=32&v=1660649013&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Eggs.png?crop=center&height=32&v=1655368519&width=32"
        },
        {
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Gluten-free_3dfe337a-e8e6-4535-a988-e237511cca0d.png?crop=center&height=32&v=1655374031&width=32"
        }
    ]

    const reviewNum= `(${reviews})`
    return ( 
        <div className=" pb-3 lg:w-80 md:w-64 w-48 border border-gray-200 rounded-xl flex flex-col p-2 hover:cursor-pointer">
            <div className="md:h-72 h-32 relative w-full items-center justify-center flex flex-col">
                <div className={
                        head==="NEW"? "absolute top-0 right-0  bg-green-700 w-12 items-center flex justify-center rounded-md text-white text-[13px] h-6 mt-4 mr-4"
                    : head==="PREORDER NOW"? "absolute top-0 right-0  bg-[#A36754] w-28 items-center flex justify-center rounded-md text-white text-[12px] h-6 mt-4 mr-4"
                    : head===""?"":"absolute top-0 right-0  bg-red-600 w-12 items-center flex justify-center rounded-md text-white text-[14px] h-6 mt-4 mr-4"
                }>
                    {head}
                </div>
                <img
                    src={img_url}
                    className=" object-contain rounded-full md:w-72 md:h-72 w-32 h-32 md:hover:w-80 md:hover:h-80 hover:w-40 hover:h-40 animate-out"
                />
            </div>
            <div className="h-full flex flex-col w-full p-4 gap-4">
                <div className="flex flex-col gap-2">
                    <p className="text-xl">${price.toFixed(2)}</p>
                    <p className="text-2xl font-[500]">{title}</p>
                    <div className="flex gap-3">
                        <Rating rating={rating}/>
                        <p className="text-sm">{reviewNum==="(undefined)"? `(0)`: reviewNum}</p>
                    </div>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div className="">
                    <Button variant="outline" className="border-black rounded-full w-full h-12 text-lg hover:bg-black hover:text-white">Buy now</Button>
                    {/* <div className="grid grid-cols-4 mt-6 gap-2 w-48">
                        {images.map((link)=> (
                            <img src={link.url} className="h-6"/>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
     );
}
 
export default ProductCards;