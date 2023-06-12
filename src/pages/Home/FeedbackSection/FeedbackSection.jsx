import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Feedback from "./Feedback";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./FeedbackSection.css"
import { A11y, Navigation, Pagination } from 'swiper';
import Container from "../../../components/Container/Container";
import useThemeContext from "../../../hooks/useThemeContext";

const FeedbackSection = () => {
    const { data: feedbacks = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axios(`/reviews`);
            return res.data;
        }
    })

    const { theme } = useThemeContext()

    return (
        <div className={`py-16 ${theme === 'light' && "bg-violet-100"}`}>
            <Container>
                <h2 className={`text-3xl font-bold text-center title ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>Our Students Feedback</h2>
                <Swiper
                    spaceBetween={40}
                    slidesPerView="auto"
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation, A11y]}>
                    {
                        feedbacks.map(feedback => <SwiperSlide
                            className="px-4 md:px-0 pt-24 mb-8 max-w-full lg:max-w-[31%] cursor-grab"
                            key={feedback._id}
                        ><Feedback feedback={feedback} />
                        </SwiperSlide>)
                    }
                </Swiper>
            </Container>
        </div>
    );
};

export default FeedbackSection;