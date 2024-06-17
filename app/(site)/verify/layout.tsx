import Footer from "@/app/(site)/_components/footer";
import Header from "@/app/(site)/_components/header";

const VerifyLayoutPage = ({
    children
}:{
    children: React.ReactNode
}) => {
    return ( 
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
     );
}
 
export default VerifyLayoutPage;