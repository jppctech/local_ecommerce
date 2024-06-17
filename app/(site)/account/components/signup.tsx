import { Button } from "@/components/ui/button";

const SignUpPage = () => {
    return ( 
        <div className="w-[24rem] flex flex-col gap-12 mt-6 mb-3">
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
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="First Name" type="name"/>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>
                            Last Name
                        </p>
                        <div className="border border-gray-300 h-12 w-[24rem] flex items-center justify-center px-2 rounded-md">
                            <input className=" outline-none bg-transparent w-full h-full" placeholder="Last Name" type="name"/>
                        </div>
                    </div>
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
                    <Button className="w-full h-12 rounded-full text-lg mt-3">
                        Create
                    </Button>
                </form>
            </div>
        </div>
     );
}
 
export default SignUpPage;