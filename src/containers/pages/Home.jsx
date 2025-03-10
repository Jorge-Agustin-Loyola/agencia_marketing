import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Header from "components/Home/Header"
import Layout from "hocs/layouts/Layout"
import Benefits from "components/Home/Benefits"
function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="py-2 px-2 mx-14" style={{ marginTop: "75px" }} >
                <Header/>
                <Benefits/>

            </div>
            <Footer/>
        </Layout>
    )
}

export default Home