"use client"

import { useEffect, useState } from "react";
import LoginPage from "./components/login";
import SignUpPage from "./components/signup";


const AccountPage = () => {

    const [isSignUp, setSignUp] = useState<boolean>(false)

    return ( 
        <div className="px-2 md:px-[4%] lg:px-[14%] border border-t-gray-200 py-12 flex flex-col ">
            <div className=" ">
                Home / Account
            </div>
            {
                isSignUp?
                <SignUpPage/>:
                <LoginPage/>
            }
            <button className="w-[24rem] flex justify-end" onClick={()=> setSignUp((pre)=> (!pre))}>
                {isSignUp? 
                <p className=" w-full text-start">Already have an account? Login</p>:
                <p className=" font-[500]">New Customer? Sign Up!</p>
            }
            </button>
        </div>
     );
}
 
export default AccountPage;