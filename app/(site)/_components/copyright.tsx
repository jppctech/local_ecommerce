import Link from "next/link";

const CopyRight = () => {
    return ( 
        <div className="w-full flex gap-1 border-t border-t-300 py-10 px-2 md:px-[4%] lg:px-[14%]">
            <p>Copyright © 2024 Local to </p>
            <Link href={"https://jayprakash27.vercel.app/"} target="_blank">
                <p className=" underline underline-offset-4 hover:text-green-700">Jay Prakash</p>
            </Link>
        </div>
     );
}
 
export default CopyRight;