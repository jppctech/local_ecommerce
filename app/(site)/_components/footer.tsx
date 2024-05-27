import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="px-2 md:px-[4%] lg:px-[14%] w-full md:flex-row flex flex-col pb-20 border-t border-t-gray-300 py-16 justify-center md:justify-normal gap-10 md:gap-0">

            <div className="flex flex-col gap-4 md:w-[25%] w-full">
                    <p className="text-3xl font-[500]">LOCAL</p>
                    <p className="flex-wrap max-w-[75%]">Fresh products from local producers, delivered directly to your front door, daily.</p>
                <div className="flex gap-2">
                <button>
                <svg fill="none" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-6">
                    <path 
                        d="m109.688 100.459c0 5.095-4.134 9.229-9.229 9.229h-79.9805c-5.0949 0-9.2285-4.134-9.2285-9.229v-50.6218c0-2.8262 1.3074-5.5178 3.5376-7.2674 4.7873-3.7491 8.7479-6.806 31.5692-23.3595 3.23-2.3456 9.6515-8.0172 14.112-7.9595 4.4604-.0769 10.8819 5.6139 14.1119 7.9595 22.8213 16.5535 26.7823 19.6104 31.5693 23.3595 2.23 1.7496 3.538 4.422 3.538 7.2674zm-8.632-41.7981c-.5-.7114-1.4804-.8844-2.1726-.3653-4.3835 3.2492-14.6704 11.8249-24.3027 18.8232-3.23 2.3648-9.6515 8.0364-14.1119 7.9595-4.4605.0577-10.882-5.5947-14.112-7.9595-9.6323-6.9983-19.9-15.574-24.3027-18.8232-.6922-.5191-1.6919-.3461-2.1726.3653l-1.7495 2.5378c-.4615.6921-.3077 1.615.346 2.1149 4.4028 3.2491 14.6705 11.8249 24.2451 18.7847 3.9029 2.8454 10.8627 9.19 17.7457 9.1515 6.8637.0385 13.8427-6.3061 17.7456-9.1515 9.5938-6.9598 19.8423-15.5356 24.2446-18.7847.673-.4999.827-1.4228.347-2.1149z" 
                        fill="#000"
                    />
                </svg>
                </button>
                <button>
                <svg fill="none" viewBox="0 0 120 120"  xmlns="http://www.w3.org/2000/svg" className="w-6">
                    <path d="m81.3942 66.8069 2.8527-18.2698h-17.8237v-11.8507c0-5.0051 2.4876-9.8755 10.4751-9.8755h8.1017v-15.5765s-7.3485-1.2344-14.4004-1.2344c-14.6743 0-24.2822 8.7533-24.2822 24.5991v13.938h-16.3174v18.2698h16.3174v44.1931h20.083v-44.1931z" 
                    fill="#000"
                    />
                </svg>
                </button>
                <button>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6">
                    <g>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </g>
                </svg>
                </button>
                </div>
            </div>

            <div className="flex-col flex gap-4  md:w-[25%] w-full">
                <p className="text-xl font-[500]">Popular categories</p>
                <div className="flex flex-col gap-2">
                    <Link href={"#"}><p className=" underline underline-offset-4 hover:text-green-700">Bread & Bakery</p></Link>
                    <Link href={"#"}><p className=" underline underline-offset-4 hover:text-green-700">Dairy & Eggs</p></Link>
                    <Link href={"#"}><p className=" underline underline-offset-4 hover:text-green-700">Fresh Meals & Pizzas</p></Link>
                    <Link href={"#"}><p className=" underline underline-offset-4 hover:text-green-700">Fruits & Vegetables</p></Link>
                    <Link href={"#"}><p className=" underline underline-offset-4 hover:text-green-700">Kitchen Appliances</p></Link>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:w-[25%] w-full">
                <p className="text-xl font-[500]">Main Store</p>
                <div className="flex flex-col gap-2">
                    <p>
                    13 Champs-Élysées
                    </p>
                    <p>
                    75008 Paris
                    </p>
                    <p>
                    France
                    </p>
                </div>
            </div>

            <div className="flex-col flex gap-4">
                <p className="text-xl font-[500]">Quick links</p>
                <div className="flex flex-col gap-2">
                    <Link href={"#"}><p className=" underline underline-offset-4 hover:text-green-700">Search</p></Link>
                    <Link href={"#"}><p className=" underline underline-offset-4 hover:text-green-700">About us</p></Link>
                    <Link href={"#"}><p className=" underline underline-offset-4 hover:text-green-700">Delivery</p></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;