import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"

function Header() {
    const linkStyle = "flex-inline text-lg inline-flex mx-4 text-sm font-medium leading-6 text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-color_logo "
    return (
        <main>
            <div className="relative px-4 lg:px-5">
                <div className=" max-w-3xl pt-20 pb-32 sm:pt-24 sm:pb-5">
                    <div>
                        
                        <div>
                            <div className="h-auto min-h-[120px]  flex  justify-start">
                                <h1 className="text-3xl  tracking-tight  md:text-6xl">
                                    Data

                                    <Typewriter
                                        words={[' to enrich your online business']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </h1>
                            </div>
                            <div className="mt-3">
                                <ul className="flex ">
                                    <li className={linkStyle}>
                                        <Link>web</Link>
                                    </li>
                                    <li className={linkStyle}>
                                        <Link>App</Link>
                                    </li>
                                    <li className={linkStyle}>
                                        <Link>Video Juegos</Link>
                                    </li>
                                    <li className={linkStyle}>
                                        <Link>Marketing</Link>
                                    </li>
                                    <li className={linkStyle}>
                                        <Link>Consultorias</Link>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-sm sm:top-[calc(100%-30rem)]">
                            <svg
                                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                viewBox="0 0 1155 678"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                    fillOpacity=".3"
                                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                />
                                <defs>
                                    <linearGradient
                                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                        x1="1155.49"
                                        x2="-78.208"
                                        y1=".177"
                                        y2="474.645"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9089FC" />
                                        <stop offset={1} stopColor="#FF80B5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </main>)
}

export default Header