import React from 'react'
import cases from './ArrayCase'

function ListCases() {
    return (



        <div name="case_grid" className="pt-[66px] pb-[77px]">

            <div name="container" className="w-full mx-auto max-w-[1142px]">



                <div name="cases-grid__row" className="flex flex-wrap mx-[-5%]" >

                    {cases.map((item, index) => {

                        
                        return (
                        <div
                        onMouseEnter={() => {
                            const ramdom_post_title_item = document.getElementById("title_cases-grid__item-title");
                            const ramdon_post_img = document.getElementById("ramdon_post_img")

                            ramdom_post_title_item.classList.add("text-color_logo")
                            ramdon_post_img.classList.add("scale-90", "rounded-[5px]")


                        }}
                        onMouseLeave={() => {
                            const ramdom_post_title_item = document.getElementById("title_cases-grid__item-title");
                            const ramdon_post_img = document.getElementById("ramdon_post_img")

                            ramdom_post_title_item.classList.remove("text-color_logo")
                            ramdon_post_img.classList.remove("scale-90", "rounded-[5px]")
                        }}
                        
                        
                        key={index} className="w-full max-w-[50%] p-[5%]" >

                            <a name="cases-grid__item" className="" href="#">

                                <div   name="cases-grid__item-img" className=" w-full h-[501px]  overflow-hidden rounded-[5px]">
                                    <div>
                                        <img id="ramdon_post_img"  src={item.image} alt="Equine is an NFT horse racing game. Race, breed, sell &amp; buy horses" loading="lazy"></img>
                                        
                                    </div>
                                </div>  

                                <ul id="cases-grid__item-tags" name="cases-grid__item-tags" className="flex flex-wrap leading-[24px] text-[16px] mt-[40px]">
                                    {item.tags.map((tag, index) => {
                                        return (<li key={index}>{tag}</li>)


                                    })}

                                </ul>

                                <h3  id="title_cases-grid__item-title" className="text-[38px] leading-[48px] mt-[10px]">{item.title}</h3>


                                <p name="desc cases-grid__item-desc" className="mt-25px leading-[28px] text-[18px] text-[#81817e]">{item.description}</p>
                            </a>
                        </div>)

                    })}


                </div>


            </div>
        </div>
    )
}

export default ListCases