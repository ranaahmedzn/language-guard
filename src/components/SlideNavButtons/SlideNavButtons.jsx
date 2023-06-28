import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';
import useThemeContext from '../../hooks/useThemeContext';

const SlideNavButtons = () => {
    const swiper = useSwiper()
    const { theme } = useThemeContext()

    return (
        <>
            <button className={`slide-nav-btn absolute top-1/2 left-2 ${theme === 'light' ? "text-gray-900" : "text-gray-400 hover:text-gray-900"}`} onClick={() => swiper.slidePrev()}>
                <FaAngleLeft />
            </button>
            <button className={`slide-nav-btn absolute top-1/2 right-2 ${theme === 'light' ? "text-gray-900" : "text-gray-400 hover:text-gray-900"}`} onClick={() => swiper.slideNext()}>
                <FaAngleRight />
            </button>
        </>
    );
};

export default SlideNavButtons;