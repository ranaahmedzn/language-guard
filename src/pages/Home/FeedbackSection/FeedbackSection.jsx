import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Feedback from "./Feedback";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./FeedbackSection.css"
import { A11y, Navigation, Pagination } from 'swiper';
import Container from "../../../components/Container/Container";

const FeedbackSection = () => {
    const { data: feedbacks = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axios(`/reviews`);
            return res.data;
        }
    })

    return (
        <div className="py-16 bg-violet-100">
            <Container>
                <h2 className="text-3xl font-bold text-center title">Our Students Feedback</h2>
                <Swiper
                    spaceBetween={40}
                    slidesPerView="auto"
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation, A11y]}>
                    {
                        feedbacks.map(feedback => <SwiperSlide
                            className="pt-24 mb-8 max-w-[31%] cursor-grab"
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