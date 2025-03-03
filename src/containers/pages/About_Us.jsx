import Navbar from "components/navegation/Navbar"
import Footer from "components/navegation/Footer"
import Layout from "hocs/layouts/Layout"
function About_Us(){
    return(
        <Layout>
            <Navbar/>
            <div className="py-2 px-8 mx-14" style={{ marginTop: "75px" }} >
                About_Us

            </div>
            <Footer/>
        </Layout>
    )
}

export default About_Us