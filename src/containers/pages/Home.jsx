import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Cases from "components/Home/cases/cases"
import Header from "components/Home/Header"
import Benefits from "components/Home/Benefits"
import Expertise from "components/Home/expertise"
import Clients from "components/Home/clients"
function Home() {
    return (
        <Layout>
            <Navbar />
            <div className="py-2 px-2 mx-14" style={{ marginTop: "75px" }} >
                <Header />
                <Benefits />
            </div>

            <Cases />

            <div className="py-2 px-2 mx-14" >
                <Expertise />
            </div>

            {/* Esto es un separador */}
            <div className="w-full h-[2px] bg-[#eaeaea]"></div>

            <div className="py-2 px-2 mx-14" >
                <Clients />
            </div>

            <Footer />
        </Layout>
    )
}

export default Home



