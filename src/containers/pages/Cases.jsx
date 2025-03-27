import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Layout from "hocs/layouts/Layout"
import Hero from "components/Cases/Hero"
import ListCases from "components/Cases/CasesGrid/ListCases"
function Cases(){
    return(
        <Layout>
            <div className=""  >
                <Navbar/>
                <Hero />
                <ListCases/>

            </div>
            <Footer/>
        </Layout>
    )
}

export default Cases