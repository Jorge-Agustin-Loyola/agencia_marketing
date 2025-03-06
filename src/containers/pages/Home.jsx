import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Header from "components/Home/Header"
import Layout from "hocs/layouts/Layout"
function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="py-2 px-8 mx-14" style={{ marginTop: "75px" }} >
                <Header/>

            </div>
            <Footer/>
        </Layout>
    )
}

export default Home