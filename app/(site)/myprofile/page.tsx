'use client'

import axios from "axios";
import { useEffect, useState } from "react"

interface UserProps{
    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    cart_items: string[]
}

const MyProfile = () => {
    const [user,setUser] = useState<UserProps>();

    useEffect(()=> {
        const handleUser = async()=> {
            const req = await axios.post('/api/user/myprofile');
            setUser(req.data.data);
        }
        handleUser()
    }, [])
    return ( 
        <div className="flex">
            my name : <p>{user?.first_name} {user?.last_name}</p>
        </div>
     );
}
    
export default MyProfile;