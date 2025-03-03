import Navbar from "components/navegation/Navbar"
import Footer from "components/navegation/Footer"
import Layout from "hocs/layouts/Layout"
function Blog(){
    return(
        <Layout>
            <Navbar/>
            <div className="py-2 px-8 mx-14" style={{ marginTop: "75px" }} >
                Blog

            </div>
            <Footer/>
        </Layout>
    )
}

export default Blog