'use client'

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";

const VerifyPage = () => {

    const Token = useParams();

    const [verified,setVerified] = useState(false);
    const [success,setSuccess] = useState(false);
    const [data,setData] = useState("")
    const [expire,setExpire] = useState(false);

    const handleVerify = async()=> {
        const res = await axios.post('/api/user/verify', Token)
        setData(res.data.data)
        if(data === "true"){
            setVerified(true)
            setSuccess(true)
        }
        if(data === 'expired'){
            setExpire(true);
        }
    }
    return ( 
        <div className=" w-full h-full flex justify-center items-center p-20 flex-col gap-8">
            <Button onClick={handleVerify} disabled={success}>
                Verify here 
            </Button>
            {
                verified && 
                    <div>
                        email has been verified !
                    </div>
                
            }
            {
                expire && 
                <div>
                    Your token has been expired, Please re-try signing up
                </div>
            }
        </div>
     );
}
 
export default VerifyPage;