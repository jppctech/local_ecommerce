import CopyRight from "./_components/copyright";
import Footer from "./_components/footer";
import Header from "./_components/header";

const SiteLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return ( 
        <div>
            <Header/>
            {children}
            <Footer/>
            <CopyRight/>
        </div>
     );
}
 
export default SiteLayout;