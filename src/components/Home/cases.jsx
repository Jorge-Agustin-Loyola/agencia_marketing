import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Cases() {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    }

    const CustomLeftArrow = ({onClick})=>{
        return(

                    <div onClick={onClick} className="group w-[60px] h-[60px] absolute  left-0  z-3 bg-white rounded-full shadow-btnCarousel ">
                        <svg viewbox="0 0 24 24" className="group-hover:fill-orange-500 transition w-[55px] h-[55px]">
                            <path transform="translate(22, 19)" d="M0.93934 13.0607C0.353553 12.4749 0.353553 11.5251 0.93934 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.93934 13.0607ZM3 13.5H2V10.5H3V13.5Z"></path>
                        </svg>
                    </div>      
        )
    }

    const CustomRightArrow = ({onClick})=>{
        return(
            

                    <div onClick={onClick} className="group w-[60px] h-[60px] absolute  right-0  z-3 bg-white rounded-full shadow-btnCarousel ">
                        <svg viewbox="0 0 24 24" className="group-hover:fill-orange-500 transition w-[55px] h-[55px]">
                            <path transform="translate(25, 19)" d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z"></path>
                        </svg>
                    </div>
           
        )
    }


    return (
        <section class="bg-[#F3F3F3]">
            <div class="container">
                <h2 class="title" data-aos="fade-in" data-aos-delay="50">Some of Our Cases</h2>
            </div>
            <div class="cases__slider-wrp">
                <div class="swiper cases__slider" data-aos="fade-in" data-aos-delay="150">
                    <div class="swiper-wrapper">
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container-with-dots"
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />}
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={responsive}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/equine-is-an-nft-horse-racing-game-race-breed-sell-buy-horses/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/equine.webp" alt="Equine" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>Research</li>
                                            <li>UX/UI Design</li>
                                            <li>Development</li>
                                        </ul>
                                        <h3 class="cases__item-title">Equine is an NFT horse racing game. Race, breed, sell &amp; buy horses</h3>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/sprightful/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/sprightful.webp" alt="Sprightful" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>UX/UI Design</li>
                                            <li>Research</li>
                                            <li>Development</li>
                                        </ul>
                                        <h3 class="cases__item-title">Sprightful</h3>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/diabetes-control/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/diabetes-control.webp" alt="Diabetes Control" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>Development</li>
                                            <li>Product Design</li>
                                        </ul>
                                        <h3 class="cases__item-title">Diabetes Control</h3>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/data-pipeline-app/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/databox.webp" alt="Databox" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>Development</li>
                                            <li>Product Design</li>
                                        </ul>
                                        <h3 class="cases__item-title">Databox</h3>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/tasty/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/tasty.webp" alt="Tasty" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>Development</li>
                                            <li>Product Design</li>
                                        </ul>
                                        <h3 class="cases__item-title">Tasty</h3>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/limehome/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/lime-home.webp" alt="Lime Home" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>Product Design</li>
                                        </ul>
                                        <h3 class="cases__item-title">Lime Home</h3>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/winrar/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/winrar.webp" alt="Rebranding Concept for WinRAR &ndash; The Most Famous File Compression Software" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>Product Design</li>
                                        </ul>
                                        <h3 class="cases__item-title">Rebranding Concept for WinRAR &ndash; The Most Famous File Compression Software</h3>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/tunego/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/tunego.webp" alt="TuneGo" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>Product Design</li>
                                        </ul>
                                        <h3 class="cases__item-title">TuneGo</h3>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/google-play/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/google-play.webp" alt="Narrative Illustrations and User Avatars for Google Play" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>Full-Cycle Product Development</li>
                                            <li>Product Design</li>
                                        </ul>
                                        <h3 class="cases__item-title">Narrative Illustrations and User Avatars for Google Play</h3>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide cases__item">
                                <a class="cases__item-body" href="/cases/boostation/">
                                    <div class="cases__item-img">
                                        <img src="/wp-content/themes/fireart/assets/img/cases/boostation.webp" alt="Explainer Video for Boostation Mobile App" loading="lazy"></img>
                                    </div>
                                    <div class="cases__item-row">
                                        <ul class="cases__item-tags">
                                            <li>Full-Cycle Product Development</li>
                                            <li>Design Outstaffing</li>
                                        </ul>
                                        <h3 class="cases__item-title">Explainer Video for Boostation Mobile App</h3>
                                    </div>
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
                
                
            </div>
        </section>

    )
}

export default Cases