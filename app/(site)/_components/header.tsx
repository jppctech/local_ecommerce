"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import { NavigationMenuDemo } from "./headerdropdown";
import { useState, ChangeEvent, useEffect } from "react";
import React, { KeyboardEvent } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Header: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [user,setUser] = useState();
    const [cartCount, setCartCount] = useState(0)

    const router = useRouter()

    useEffect(()=> {
        const handleUser = async () => {
            const req = await axios.post('/api/user/myprofile');
            setUser(req.data.data)
        }

        const handleCartCount = async () => {
            const req = await axios.post('/api/user/cartcount')
            setCartCount(req.data.data)
        }
        handleUser();
        handleCartCount();
    }, [])

    useEffect(()=> {
        const handleCartCount = async () => {
            const req = await axios.post('/api/user/cartcount')
            setCartCount(req.data.data)
        }
        handleCartCount();
    }, [])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault
        setSearch(event.target.value);
    };

    const startSearch = (event: KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === 'Enter') {
            router.push(`/SearchPage/${search}`)
        }
    }

    const handleAccount = ()=>{
        if(!user){
            router.push(`/account`)
        }else{
            router.push('/myprofile')
        }
    }

    return (
        <div className="flex flex-col w-full">
            <div className="md:flex-row flex-col flex w-full h-32 md:justify-between justify-center items-center gap-4 border border-b-gray-200 px-2 md:px-[4%] lg:px-[14%]">
                <Link href={'/'}>
                    <Image
                        alt="local logo"
                        height={1000}
                        width={1000}
                        src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/LOGO_new.png?v=1655818343"
                        className="object-contain md:h-16 h-8 w-28"
                    />
                </Link>
                <div className="flex w-full items-center justify-end gap-4">
                    <div className="md:w-[65%] w-full flex bg-white md:h-12 h-10 rounded-full items-center px-3 gap-2 hover:border-black border border-gray-200 relative">
                        <Search />
                        <input
                            className="w-full h-full outline-none rounded-full bg-transparent"
                            name="search"
                            value={search}
                            placeholder="Search for..."
                            onChange={handleInputChange}
                            onKeyDown={startSearch}
                        />
                    </div>
                    <button className="hidden md:flex gap-2 border border-gray-600 rounded-full h-12 w-36 items-center justify-center hover:bg-black hover:text-white" onClick={handleAccount}>
                        <User />
                        <p>Account</p>
                    </button>
                    <button className="hidden md:flex gap-2 border border-gray-600 rounded-full h-12 w-36 items-center justify-center bg-black text-white">
                        <ShoppingCart />
                        <p>$0.00</p>
                        <p>({cartCount})</p>
                    </button>
                </div>
            </div>
            <div className="flex w-full md:px-[4%] lg:px-[14%] py-4 md:-ml-4">
                <NavigationMenuDemo />
            </div>
        </div>
    );
};

export default Header;
