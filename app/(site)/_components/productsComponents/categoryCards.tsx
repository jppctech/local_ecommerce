import Image from "next/image";

const CategoryCard = ({
    img_url,
    txt
}:{
    img_url: string,
    txt: string
}) => {
    return ( 
        <button className="border border-gray-300 h-64 w-48 rounded-lg flex flex-col items-center">
            <div className="w-full h-48 items-center justify-center flex">
                <Image 
                    alt="product images"
                    width={500}
                    height={500}
                    src={img_url} 
                    className="w-40 hover:w-48 hover:animate-out"/>
            </div>
            <p className="px-2 text-center">{txt}</p>
        </button>
     );
}
 
export default CategoryCard;