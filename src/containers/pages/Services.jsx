import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Layout from "hocs/layouts/Layout"
import Hero from "components/services/Hero"
import Clients from "components/Home/clients"
import Random_post from "components/Home/random_post"
import Prefooter from "components/Home/prefooter"
import ListServices from "components/services/servicesGrid/ListServices"
function Services(){
    return(
        <Layout>
            <Navbar/>
            <Hero/>
            <ListServices/>
            <Clients/>
            <Random_post/>
            <Prefooter/>
            <Footer/>
        </Layout>
    )
}

export default Services