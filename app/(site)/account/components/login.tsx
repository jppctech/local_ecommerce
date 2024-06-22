"use client"

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast'

const LoginPage = () => {

    const [user,setUser] = useState({
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleLogin = async ()=> {
        const res = await axios.post('api/user/login', user);
        const response = res.data.data
        if(response === 'notFound'){
            toast.error("User not found!")
        }
        if( response === "invalidPassword" ){
            toast.error("Invalid Pasword!")
        }
        if(response === "true"){
            toast.success("Login Successfully")
            setTimeout(()=>{
                router.push('/');
            }, 2000);
        }
    }
    return ( 
        <div className="w-[24rem] flex flex-col gap-12 mt-6">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className=" text-[44px] font-[500]">
                Customer Login
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-6">
                    <div className=" flex flex-col gap-2">
                        <p>
                            Email
                        </p>
                        <div className="border border-gray-300 h-12 w-[24rem] flex items-center justify-center px-2 rounded-md">
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="Email" type="email" value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})}/>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>
                            Password
                        </p>
                        <div className="border border-gray-300 h-12 w-[24rem] flex items-center justify-center px-2 rounded-md">
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="Password" type="password" value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})}/>
                        </div>
                    </div>
                    <Button className="w-32 h-12 rounded-full text-lg" onClick={handleLogin}>
                        Login
                    </Button>
                    <div className="w-full cursor-pointer">
                        <p className="text-end text-[15px]">
                        Forgot your password?
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;