import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Layout from "hocs/layouts/Layout"
import Hero from "components/About_Us/Hero"
import Clients from "components/Home/clients"
import Achievement from "components/Home/achievement"
import Benefits from "components/Home/Benefits"
import Prefooter from "components/Home/prefooter"
import ImgCarousel from "components/About_Us/imgCarousel/imgCarousel"

function About_Us(){
    return(
        <Layout >
            <Navbar/>
            <Hero/>
            <Clients/>
            <Achievement/>
            <div className="w-full">
                <ImgCarousel/>

            </div>
            <Benefits/>
            <Prefooter/>
            <Footer/>
        </Layout>
    )
}

export default About_Us