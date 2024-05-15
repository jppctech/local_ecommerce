"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'next/navigation'
import Rating from "../../_components/rating_star"
import "../../../globals.css"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import GoesWellWith from "../components/GoesWellWith"
import Footer from "../../_components/footer"
import OurServices from "../components/ourServices"


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
    description: string,
    allergens: Array<any>,
    category: string
}

const ProductPage = () => {
    const [productDetail, setProductDetails] = useState<ProductDetailProps | any>()

    const [quantity,setQuantity] = useState(1);

    const plus=()=>{
        if(quantity<10){
            setQuantity(quantity+1)
        }
    };

    const minus=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

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

    
    
    
    const Allergens = [
        {
            label: "milk-free",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/milk-free.png?crop=center&height=32&v=1654693369&width=32"
        },
        {
            label: "gluten-free",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Gluten-free_3dfe337a-e8e6-4535-a988-e237511cca0d.png?crop=center&height=32&v=1655374031&width=32"
        },
        {
            label: "eggs-free",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/eggs-free.png?crop=center&height=32&v=1654693369&width=32"
        },
        {
            label: "apple",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/apple-1069_1662a7dc-9d78-40f0-ad21-0d60d427a65d.png?crop=center&height=32&v=1656493437&width=32"
        },
        {
            label: "ecologic",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Eco_f7523587-bd10-46a8-9311-a125db925258.png?crop=center&height=32&v=1654250639&width=32"
        },
        {
            label: "soya-free",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Soya-free_28429413-b9fa-41da-bb09-53785688b1e0.png?crop=center&height=32&v=1655796596&width=32"
        },
        {
            label: "organic",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Organic_7e1deabb-4002-4a38-aedc-4f5febec3a72.png?crop=center&height=32&v=1655795934&width=32"
        },
        {
            label: "celery",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Celery_4187368e-801a-492b-b78b-fc78ff14577f.png?crop=center&height=32&v=1660649172&width=32"
        },
        {
            label: "peanuts",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Peanuts.png?crop=center&height=32&v=1660649081&width=32"
        },
        {
            label: "nuts",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Nuts.png?crop=center&height=32&v=1660649060&width=32"
        },
        {
            label: "gluten",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Gluten_0cd5b727-d9fe-4595-953b-44d39dba88ee.png?crop=center&height=32&v=1660649125&width=32"
        },
        {
            label: "corn",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Corn.png?crop=center&height=32&v=1660649013&width=32"
        },
        {
            label: "eggs",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/Eggs.png?crop=center&height=32&v=1655368519&width=32"
        },
    ]

    return ( 
        <div className="md:px-[4%] h-full lg:px-[14%] mb-20 px-4 border-t border-t-gray-200 flex flex-col w-full pb-20">
            <div className="py-4">
                <p className="text-sm text-gray-600">Home / All products / {productDetail?.title}</p>
            </div>
            <div className="md:flex w-full flex-row">
                        {/* left side image div  */}
                    <div className="gap-3 flex flex-col w-full">
                        <div className="border border-gray-300 lg:max-w-[600px] w-[100%] items-center justify-center flex lg:max-h-[600px] rounded-xl">
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
                <div className="w-[100%] md:px-4 gap-6 flex flex-col">
                {/* overflow-y-scroll no-scrollbar h-[750px] */}
                    <p className="text-xl font-[500]">${productDetail?.price.toFixed(2)}</p>
                    <p className="text-3xl font-[500]">{productDetail?.title}</p>
                    <div className="flex gap-3 text-sm">
                        <Rating rating={productDetail?.rating!}/>
                        <p>{Review === "(undefined)"? `(0)`: Review}</p>
                    </div>
                    <p>{productDetail?.subtitle}</p>
                    <p>{productDetail?.description}</p>
                    <p className="text-xl font-[500] text-gray-800">Allergens</p>
                    <div className="flex gap-4 w-full">
                        {Allergens.map((link)=>(
                            <div key={link.label} className={productDetail?.allergens.includes(link.label)? " flex items-center gap-2": "hidden"}>
                                <img src={link.url}
                                    className="w-8"/>
                                <p className="text-sm">{link.label}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-500">There are 39 products left</p>
                    <p className="text-[56px]">${productDetail?.price.toFixed(2)}</p>
                    <Separator/>
                    <div className="w-full flex py-2 items-center">
                        <div className="flex  gap-8 justify-between lg:justify-normal w-full px-6 lg:px-0">
                            <div className="flex items-center">
                            <Button onClick={minus} disabled={quantity===1? true: false} variant={"outline"} className="border border-black rounded-full w-12 h-12 items-center justify-center flex hover:shadow-lg">
                                <Minus size={20}/>
                            </Button>
                            <div className="flex px-8 items-center text-2xl">{quantity}</div>
                            <Button onClick={plus} disabled={quantity===10? true: false} variant={"outline"} className="border border-black rounded-full w-12 h-12 items-center justify-center flex hover:shadow-lg">
                                <Plus size={20}/>
                            </Button>
                            </div>
                        <Button className="lg:w-56 p-8 rounded-full text-xl">
                            Add to cart
                        </Button>
                        </div>
                        <Button variant={"outline"} className="hidden lg:flex w-48 p-8 rounded-full md:ml-6 text-lg border-black hover:bg-black hover:text-white">
                            Buy it now
                        </Button>
                    </div>
                    <Button variant={"outline"} className="lg:hidden flex w-full p-8 rounded-full md:ml-6 text-lg border-black hover:bg-black hover:text-white">
                            Buy it now
                    </Button>
                    <GoesWellWith category={productDetail?.category}/>
                </div>
            </div>
            <OurServices/>
        </div>
     );
}

export default ProductPage;