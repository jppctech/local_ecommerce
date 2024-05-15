import CategoryCard from "./productsComponents/categoryCards";

const ShopByCategory = () => {

    const data = [
        {
            text: "Fresh Meals & Pizza",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/1.jpg?crop=center&height=240&v=1655710182&width=240"
        },
        {
            text: "Bread & Bakery",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/cat4.jpg?crop=center&height=240&v=1654169813&width=240"
        },
        {
            text: "Flour & Baking Essentials",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/cat6.jpg?crop=center&height=240&v=1654169838&width=240"
        },
        {
            text: "Fruits & Vegetables",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/cat5.jpg?crop=center&height=240&v=1654169826&width=240"
        },
        {
            text: "Fresh Meat",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/cat2.jpg?crop=center&height=240&v=1654169790&width=240"
        },
        {
            text: "Dairy & Eggs",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/cat3.jpg?crop=center&height=240&v=1654169800&width=240https://local-theme-light-demo.myshopify.com/cdn/shop/files/cat3.jpg?crop=center&height=240&v=1654169800&width=240"
        },
        {
            text: "Beverages",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/cat9.jpg?crop=center&height=240&v=1654171331&width=240"
        },
        {
            text: "Sauces & Marinades",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/cat10.jpg?crop=center&height=240&v=1654171514&width=240"
        }
    ]
    return ( 
        <div className="w-full flex flex-col gap-10 md:px-[4%] lg:px-[14%] mb-20 px-4 items-center md:items-start">
          <div className="w-full flex justify-between mt-24">
            <p className="text-3xl font-[450]">Shop by Category</p>
            <button className="text-xl underline underline-offset-4">View all collection</button>
          </div>
          <div className="flex w-full gap-8 justify-center md:justify-normal overflow-x-scroll no-scrollbar">
            {data.map((link)=>(
                <div key={link.text}>
                    <CategoryCard
                    img_url={link.url}
                    txt={link.text}
                />
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default ShopByCategory;