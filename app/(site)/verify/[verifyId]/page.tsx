'use client'

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";

const VerifyPage = () => {

    const { token } = useParams();

    const [verified, setVerified] = useState(false);
    const [success, setSuccess] = useState(false);
    const [expire, setExpire] = useState(false);
    const [responseData,setResponseData] = useState()

    const handleVerify = async () => {
        try {
            const res = await axios.post('/api/user/verify', { token });
             setResponseData(res.data.data;)
            if (responseData === "true") {
                setVerified(true);
                setSuccess(true);
            } if (responseData === "expired") {
                setExpire(true);
            }
        } catch (error) {
            console.error("Error verifying token:", error);
        }
    };

    return ( 
        <div className="w-full h-full flex justify-center items-center p-20 flex-col gap-8">
            <Button onClick={handleVerify} disabled={success}>
                Verify here 
            </Button>
            {
                verified && 
                    <div>
                        Email has been verified!
                    </div>
                
            }
            {
                expire && 
                <div>
                    Your token has expired, please re-try signing up.
                </div>
            }
        </div>
     );
}

export default VerifyPage;
