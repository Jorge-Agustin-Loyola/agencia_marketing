import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Layout from "hocs/layouts/Layout"
function Contact(){
    return(
        <Layout>
            <Navbar/>
            <div className="py-2 px-8 mx-14" style={{ marginTop: "75px" }} >
                Contact

            </div>
            <Footer/>
        </Layout>
    )
}

export default Contact