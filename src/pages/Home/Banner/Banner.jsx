import Container from '../../../components/Container/Container';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import SlideNavButtons from "../../../components/SlideNavButtons/SlideNavButtons";

const Banner = () => {

    //TODO: change the banner image and made some changes in design
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            modules={[Navigation]}>
            <SwiperSlide className="relative">
                <Container>
                    <div className="flex py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="text-3xl sm:text-5xl mb-4 font-bold text-gray-900"> Embark on a Global
                                <br className="hidden lg:inline-block" /> Language Adventure
                            </h1>
                            <p className="mb-7 leading-relaxed">Step into a world of linguistic wonders with Linguistic Horizons. Immerse yourself in captivating cultures, master new languages, and forge meaningful connections across borders. Our expert instructors create a dynamic learning environment, combining interactive lessons and real-world language practice.</p>
                            <div className="flex justify-center">
                                <button className="primary-btn py-3">Get Started</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        </div>
                    </div>
                    <SlideNavButtons />
                </Container>
            </SwiperSlide>

            <SwiperSlide className="relative">
                <Container>
                    <div className="flex py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="text-3xl sm:text-5xl mb-4 font-bold text-gray-900"> Discover the Power
                                <br className="hidden lg:inline-block" /> of Multilingualism
                            </h1>
                            <p className="mb-7 leading-relaxed">Embark on an extraordinary Language Voyage and unlock the boundless potential of multilingualism. Set sail on a journey that takes you beyond linguistic boundaries, equipping you with the tools to navigate a diverse and interconnected world. Embrace the richness of language, sail towards endless possibilities, and navigate your way to a global future.</p>
                            <div className="flex justify-center">
                                <button className="primary-btn py-3">Get Started</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        </div>
                    </div>
                    <SlideNavButtons />
                </Container>
            </SwiperSlide>

            <SwiperSlide className="relative">
                <Container>
                    <div className="flex py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="text-3xl sm:text-5xl mb-4 font-bold text-gray-900">  Empowering Minds via
                                <br className="hidden lg:inline-block" /> Language Proficiency
                            </h1>
                            <p className="mb-7 leading-relaxed">At Fluent Futures, we believe in the transformative power of language proficiency to shape brighter futures. With mastery of multiple languages, you&apos;ll gain a competitive edge in the global landscape, expand your cultural intelligence, and broaden your perspectives. Unleash the power of language, ignite your potential, and shape a future brimming with possibilities.</p>
                            <div className="flex justify-center">
                                <button className="primary-btn py-3">Get Started</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        </div>
                    </div>
                    <SlideNavButtons />
                </Container>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;