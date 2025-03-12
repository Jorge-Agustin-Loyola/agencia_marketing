import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Cases from "components/Home/cases"
import Header from "components/Home/Header"
import Benefits from "components/Home/Benefits"
function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="py-2 px-2 mx-14" style={{ marginTop: "75px" }} >
                <Header/>
                <Benefits/>
                <Cases/>

            </div>
            <Footer/>
        </Layout>
    )
}

export default Home