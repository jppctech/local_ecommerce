import { Button } from "@/components/ui/button";

const LoginPage = () => {
    return ( 
        <div className="w-[24rem] flex flex-col gap-12 mt-6">
            <div className=" text-[44px] font-[500]">
                Customer Login
            </div>
            <div className="flex flex-col">
                <form className="flex flex-col gap-6">
                    <div className=" flex flex-col gap-2">
                        <p>
                            Email
                        </p>
                        <div className="border border-gray-300 h-12 w-[24rem] flex items-center justify-center px-2 rounded-md">
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="Email" type="email"/>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>
                            Password
                        </p>
                        <div className="border border-gray-300 h-12 w-[24rem] flex items-center justify-center px-2 rounded-md">
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="Password" type="password"/>
                        </div>
                    </div>
                    <Button className="w-32 h-12 rounded-full text-lg">
                        Login
                    </Button>
                    <div className="w-full cursor-pointer">
                        <p className="text-end text-[15px]">
                        Forgot your password?
                        </p>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default LoginPage;