import { connect } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import logo_fs from "assets/img/LogoFullStack.PNG"
import loading_dots from "assets/img/loading_dots.gif"

function Navbar() {

    window.onscroll = function(){scrollFunction()}
    function scrollFunction(){
        if(document.getElementById('navbar')){
            if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');

            }
        }
    }


    const classNavLink = ({isActive})=>`text-lg inline-flex mx-4 text-sm font-medium leading-6 text-gray-900 ${isActive ?'underline_custom' : "relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-color_logo "} `
    return (
        <nav id="navbar" className="fixed top-0 left-0 w-full py-2 bg-white text-black transition duration-300 easy-in-out shadow-navbar z-10 "
>          <div className="  bg-whithe px-4 sm:px-6">
                <div className="  -mt-2 flex flex-wrap justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to="/" className="m-2">
                        <img src={logo_fs} className="w-20 h-auto rounded-md" />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to="/Cases" className={classNavLink}>Casos</NavLink>
                        <NavLink to="/Services" className={classNavLink}>Servicios</NavLink>
                        <NavLink to="/Careers" className={classNavLink}>Carreras</NavLink>
                        <NavLink to="/Podcast" className={classNavLink}>Podcast</NavLink>
                        <NavLink to="/Blog" className={classNavLink}>Blog</NavLink>
                        <NavLink to="/About_Us" className={classNavLink}>Nosotros</NavLink>
                        <NavLink to="/Contact" className={classNavLink} >Contacto</NavLink>
                        {/* <button
                            type="button"
                            className="relative inline-flex items-center rounded-sm border border-transparent bg-color_logo px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Hire us 
                            <img src={loading_dots} className="w-8 h-auto pl-3 pt-0.5" />
                        </button> */}
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-color_logo px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Hire Us
                            <img src={loading_dots} className="w-8 h-auto pl-3 pt-0.5" />
                            
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(Navbar)





