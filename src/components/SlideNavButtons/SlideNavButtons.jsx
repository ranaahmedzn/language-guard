import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const SlideNavButtons = () => {
    const swiper = useSwiper()

    return (
        <>
            <button className='slide-nav-btn absolute top-1/2 left-2' onClick={() => swiper.slidePrev()}>
                <FaAngleLeft />
            </button>
            <button className='slide-nav-btn absolute top-1/2 right-2' onClick={() => swiper.slideNext()}>
                <FaAngleRight />
            </button>
        </>
    );
};

export default SlideNavButtons;