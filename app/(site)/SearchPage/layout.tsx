import Footer from "../_components/footer"
import Header from "../_components/header"

function LayoutPage({
    children
}:{
    children: React.ReactNode
}) {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default LayoutPage