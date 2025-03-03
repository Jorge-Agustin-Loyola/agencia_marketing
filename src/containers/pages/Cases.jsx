import Navbar from "components/navegation/Navbar"
import Footer from "components/navegation/Footer"
import Layout from "hocs/layouts/Layout"
function Cases(){
    return(
        <Layout>
            <Navbar/>
            <div className="py-2 px-8 mx-14" style={{ marginTop: "75px" }} >
                Cases

            </div>
            <Footer/>
        </Layout>
    )
}

export default Cases