import Footer from "./_components/footer";
import Header from "./_components/header";

const SiteLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default SiteLayout;