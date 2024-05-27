"use client"

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Admin = () => {

    const router = useRouter()
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [user, setUser] = useState({
      email: "",
      password: "",
  })

    const onLogin = async () => {
        try {
          const response = await axios.post("api/login", user)
          console.log("Login success", response.data);
          router.push('/profile')
        
          
        } catch (error:any) {
          console.log("signup Failed")
        }
      }
    
      useEffect(()=>{
        if (user.email.length > 0 && user.password.length > 0 ) {
          setButtonDisabled(false)
        } else {
          setButtonDisabled(true)
        }
    
      },[user])

    return ( 
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-300">
            <div className="w-[500px] h-[300px] bg-blue-500 rounded-xl">
                <div className="w-full flex flex-col p-4 gap-2">
                    <p className="text-white font-[500] text-xl">Email</p>
                    <div className="w-[full] rounded-xl flex items-center justify-center h-8 bg-white">
                        <input 
                            className=" outline-none w-[95%]" 
                            type="email" 
                            placeholder="abc@gmail.com"
                            value={user.email}
                            onChange={(e)=> setUser({...user, email: e.target.value})}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col p-4 gap-2">
                    <p className="text-white font-[500] text-xl">Password</p>
                    <div className="w-[full] rounded-xl flex items-center justify-center h-8 bg-white">
                        <input 
                            className=" outline-none w-[95%]" 
                            value={user.password}
                            onChange={(e)=> setUser({...user, password: e.target.value})}
                            type="password" placeholder="********"/>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center mt-6">
                    <Button variant={"outline"} onClick={onLogin}>
                        Admin Login
                    </Button>
                </div>
            </div>
        </div>
     );
}

export default Admin;