import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Layout from "hocs/layouts/Layout"
import Hero from "components/Cases/Hero"
import ListCases from "components/Cases/CasesGrid/ListCases"
import Random_post from "components/Home/random_post"
import Prefooter from "components/Home/prefooter"
function Cases(){
    return(
        <Layout>
            <div className=""  >
                <Navbar/>
                <Hero />
                <ListCases/>
                <Random_post/>
                <Prefooter/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Cases