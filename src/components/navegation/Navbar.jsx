import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo_fs from "assets/img/LogoFullStack.PNG"
import loading_dots from "assets/img/loading_dots.gif"

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full py-2 bg-white text-black  shadow-sm "
>          <div className="  bg-whithe px-4 sm:px-6">
                <div className="  -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="m-2">
                        <img src={logo_fs} className="w-20 h-auto rounded-md" />
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Link to="/casos" className="text-lg inline-flex mx-4 text-sm font-medium leading-6 text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-color_logo">Casos</Link>
                        <Link to="/servicios" className="text-lg inline-flex mx-4 text-sm font-medium leading-6 text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-color_logo">Servicios</Link>
                        <Link to="/nosotros" className="text-lg inline-flex mx-4 text-sm font-medium leading-6 text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-color_logo">Nosotros</Link>
                        <Link to="/carreras" className="text-lg inline-flex mx-4 text-sm font-medium leading-6 text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-color_logo">Carreras</Link>
                        <Link to="/blog" className="text-lg inline-flex mx-4 text-sm font-medium leading-6 text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-color_logo">Blog</Link>
                        <Link to="/contacto" className="text-lg inline-flex mx-4 text-sm font-medium leading-6 text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-color_logo">Contacto</Link>
                        <button
                            type="button"
                            className="relative inline-flex items-center rounded-sm border border-transparent bg-color_logo px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Hire us 
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