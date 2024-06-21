'use client'

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const VerifyPage = () => {

    const token = useParams();

    const [success, setSuccess] = useState(false);
    const router = useRouter()

    const handleVerify = async () => {
        try {
            const res = await axios.post('/api/user/verify', token);
            const responseData = res.data.data;
            if (responseData === "true") {
                toast.success("Email has been verified successfully")
                setSuccess(true);
                setTimeout(() => {
                    router.push('/account')
                }, 3000);
            } if (responseData === "expired") {
                toast.error("Your Token has been expired! try signing up again.")
            }
        } catch (error) {
            console.error("Error verifying token:", error);
        }
    };

    return ( 
        <div className="w-full h-full flex justify-center items-center p-20 flex-col gap-8">
            <Toaster/>
            <Button onClick={handleVerify} disabled={success}>
                Verify here 
            </Button>
        </div>
     );
}

export default VerifyPage;
