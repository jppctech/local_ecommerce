import { Search, ShoppingCart, User } from "lucide-react";
import { NavigationMenuDemo } from "./headerdropdown";

const Header = () => {
    return ( 
        <div className="flex flex-col w-full">
            <div className="md:flex-row flex-col flex w-full h-32 md:justify-between justify-center items-center gap-4 border border-b-gray-200 px-2 md:px-[4%] lg:px-[14%]">
                    <img 
                        src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/LOGO_new.png?v=1655818343"
                        className=" object-cover md:h-16 h-8"
                    />
                <div className="flex w-full items-center justify-end gap-4">
                    <div className="md:w-[65%] w-full flex bg-white md:h-12 h-10 rounded-full items-center px-3 gap-2 hover:border-black border border-gray-200">
                        <Search/>
                        <input 
                        className="w-full h-full outline-none rounded-full"
                        placeholder="Search for..."
                        />
                    </div>
                    <button className="hidden md:flex gap-2 border border-gray-600 rounded-full h-12 w-36 items-center justify-center hover:bg-black hover:text-white">
                        <User/>
                        <p>Account</p>
                    </button>
                    <button className="hidden md:flex gap-2 border border-gray-600 rounded-full h-12 w-36 items-center justify-center bg-black text-white">
                        <ShoppingCart/>
                        <p>$0.00</p>
                        <p>(0)</p>
                    </button>
                </div>
            </div>
            <div className="flex w-full md:px-[4%] lg:px-[14%] py-4 md:-ml-4">
                <NavigationMenuDemo/>
            </div>
        </div>
     );
}
 
export default Header;