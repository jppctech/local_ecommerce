'use client'

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

interface UserProps{
    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    cart_items: string[]
}

const MyProfile = () => {
    const [user,setUser] = useState<UserProps>();
    const router = useRouter();

    useEffect(()=> {
        const handleUser = async()=> {
            const req = await axios.post('/api/user/myprofile');
            setUser(req.data.data);
        }
        handleUser()
    }, [])

    const handleLogout = async()=> {
        await axios.get('/api/user/logout');
        toast.success("Logout succussfully")
        setTimeout(()=>{
            router.push('/')
        }, 2000)
    }
    return ( 
        <div className="flex flex-col w-full h-full px-2 md:px-[4%] lg:px-[14%] border border-t-gray-200 py-12 gap-8">
            <Toaster/>
            <div>Home / Account</div>
            <div className="text-4xl">My Account</div>
            <div>
                <Button className=" bg-white hover:bg-black text-black hover:text-white rounded-full w-28 h-10 border border-black" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div>
                <p>
                    Order History 
                </p>
                <p>
                    You haven't placed any orders yet.
                </p>
            </div>
        </div>
     );
}
    
export default MyProfile;