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
        </div>
     );
}
 
export default SiteLayout;