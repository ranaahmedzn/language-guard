import Container from '../../../components/Container/Container';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import SlideNavButtons from "../../../components/SlideNavButtons/SlideNavButtons";
import useThemeContext from '../../../hooks/useThemeContext';
import student1 from '../../../assets/student1.png'
import student2 from '../../../assets/student2.png'
import student3 from '../../../assets/student3.png'

const Banner = () => {
    const { theme } = useThemeContext()

    //TODO: change the banner image and made some changes in design
    return (
        <Swiper
            centeredSlides={true}
            modules={[Navigation]}>
            <SwiperSlide className="relative">
                <Container>
                    <div className="flex px-4 md:px-0 py-20 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className={`text-3xl sm:text-5xl mb-4 font-bold leading-[45px] lg:leading-[55px] ${theme === 'light' ? 'text-gray-900': 'text-gray-100'}`}>
                                Embark on a Global <br className="hidden lg:inline-block" /> Language Adventure
                            </h1>
                            <p className={`mb-7 leading-relaxed ${theme === 'light' ? "text-gray-900" : "text-gray-400"}`}>Step into a world of linguistic wonders with Linguistic Horizons. Immerse yourself in captivating cultures, master new languages, and forge meaningful connections across borders. Our expert instructors create a dynamic learning environment, combining interactive lessons and real-world language practice.</p>
                            <div className="flex justify-center">
                                <button className="primary-btn py-3">Get Started</button>
                            </div>
                        </div>
                        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="" src={student1} />
                        </div>
                    </div>
                    <SlideNavButtons />
                </Container>
            </SwiperSlide>

            <SwiperSlide className='relative'>
                <Container>
                    <div className="flex py-20 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className={`text-3xl sm:text-5xl mb-4 font-bold leading-[45px] lg:leading-[55px] ${theme === 'light' ? 'text-gray-900': 'text-gray-100'}`}> 
                                Discover the Power <br className="hidden lg:inline-block" /> of Multilingualism
                            </h1>
                            <p className={`mb-7 leading-relaxed ${theme === 'light' ? "text-gray-900" : "text-gray-400"}`}>Embark on an extraordinary Language Voyage and unlock the boundless potential of multilingualism. Set sail on a journey that takes you beyond linguistic boundaries, equipping you with the tools to navigate a diverse and interconnected world. Embrace the richness of language, sail towards endless possibilities, and navigate your way to a global future.</p>
                            <div className="flex justify-center">
                                <button className="primary-btn py-3">Get Started</button>
                            </div>
                        </div>
                        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="" src={student2} />
                        </div>
                    </div>
                    <SlideNavButtons />
                </Container>
            </SwiperSlide>

            <SwiperSlide className="relative">
                <Container>
                    <div className="flex py-20 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className={`text-3xl sm:text-5xl mb-4 font-bold leading-[45px] lg:leading-[55px] ${theme === 'light' ? 'text-gray-900': 'text-gray-100'}`}> 
                                Empowering Minds via <br className="hidden lg:inline-block" /> Language Proficiency
                            </h1>
                            <p className={`mb-7 leading-relaxed ${theme === 'light' ? "text-gray-900" : "text-gray-400"}`}>At Fluent Futures, we believe in the transformative power of language proficiency to shape brighter futures. With mastery of multiple languages, you&apos;ll gain a competitive edge in the global landscape, expand your cultural intelligence, and broaden your perspectives. Unleash the power of language, ignite your potential, and shape a future brimming with possibilities.</p>
                            <div className="flex justify-center">
                                <button className="primary-btn py-3">Get Started</button>
                            </div>
                        </div>
                        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="" src={student3} />
                        </div>
                    </div>
                    <SlideNavButtons />
                </Container>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;