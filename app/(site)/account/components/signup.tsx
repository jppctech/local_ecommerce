'use client'

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignUpPage = () => {
    const [user,setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    const router = useRouter()

    const handleSubmit = async() =>{
        const res = await axios.post('/api/user/signup', user);
        const data = res.data.data;
        if(data === 'exists'){
            toast.error("User already exists!")
        }if(data === 'true'){
            toast.success("Please verify your email")
            setTimeout(() => {
                router.push('account')
            }, 3000);
        }
    }
    return ( 
        <div className="w-[24rem] flex flex-col gap-12 mt-6 mb-3">
            <Toaster/>
            <div className=" text-[44px] font-[500]">
                Create an account
            </div>
            <div className="flex flex-col">
                <form className="flex flex-col gap-3">
                    <div className=" flex flex-col gap-2">
                        <p>
                            First Name
                        </p>
                        <div className="border border-gray-300 h-12 w-[24rem] flex items-center justify-center px-2 rounded-md">
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="First Name" type="name" value={user.first_name} onChange={(e)=>setUser({...user, first_name: e.target.value})}/>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>
                            Last Name
                        </p>
                        <div className="border border-gray-300 h-12 w-[24rem] flex items-center justify-center px-2 rounded-md">
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="Last Name" type="name" value={user.last_name} onChange={(e)=>setUser({...user, last_name: e.target.value})}/>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>
                            Email
                        </p>
                        <div className="border border-gray-300 h-12 w-[24rem] flex items-center justify-center px-2 rounded-md">
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="Email" type="email" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})}/>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>
                            Password
                        </p>
                        <div className="border border-gray-300 h-12 w-[24rem] flex items-center justify-center px-2 rounded-md">
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="Password" type="password" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}/>
                        </div>
                    </div>
                    <Button className="w-full h-12 rounded-full text-lg mt-3" onClick={handleSubmit}>
                        Create
                    </Button>
                </form>
            </div>
        </div>
     );
}
 
export default SignUpPage;