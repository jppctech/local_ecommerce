import Footer from "@/app/(site)/_components/footer";
import Header from "@/app/(site)/_components/header";

const LayoutPage = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="">
            <Header/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default LayoutPage;