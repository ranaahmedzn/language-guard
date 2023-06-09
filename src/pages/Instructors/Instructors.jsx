import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from "../../components/Container/Container";
import { FaArrowRight } from "react-icons/fa";

const Instructors = () => {

    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axios(`/instructors`);
            return res.data;
        }
    })
    console.log(instructors)
    return (
        <section className="text-gray-600 py-24">
            <Container>
                {instructors.map((instructor, index) => {
                    return <div
                        key={instructor._id}
                        className={index % 2 === 0 ? "flex gap-10 items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" : "flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row-reverse flex-col"}>

                        <img src={instructor.image} className="rounded-full sm:h-36 sm:w-36 w-20 h-20" alt="" />

                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-xl font-medium">{instructor.name}</h2>
                            <p className="leading-relaxed text-sm font-medium mb-3">{instructor.email}</p>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>

                            <div className="flex items-center gap-3 mt-4">
                                <span className="bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded dark:bg-red-900 dark:text-red-300">{instructor.classNumbers}+ Classes</span>
                                <button className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded inline-flex gap-2 items-center">
                                    <span className="font-medium">See Classes</span>
                                    <FaArrowRight />
                                </button>
                            </div>

                        </div>
                    </div>
                })}
            </Container>
        </section>
    );
};

export default Instructors;