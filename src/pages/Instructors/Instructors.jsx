import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from "../../components/Container/Container";
import { FaArrowRight } from "react-icons/fa";
import useThemeContext from "../../hooks/useThemeContext";

const Instructors = () => {

    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axios(`/instructors`);
            return res.data;
        }
    })
    const { theme } = useThemeContext()

    return (
        <section className="text-gray-600 py-16">
            <Container>
                <div className="text-center w-2/3 mx-auto space-y-4 mb-12">
                    <h2 className={`text-3xl font-bold ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>Explore our popular classes</h2>
                    <p className={`${theme === 'light' ? "text-gray-900" : "text-gray-400"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem quae explicabo, eveniet quasi perferendis rem commodi eum praesentium! Dolores ullam nostrum beatae a ducimus.</p>
                </div>


                {instructors.map((instructor, index) => {
                    return <div
                        key={instructor._id}
                        className={`flex gap-10 items-center lg:w-3/5 mx-auto p-10 mb-10 flex-col rounded-lg ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} ${theme === 'light' ? "bg-gray-100" : "bg-[#1c2d49]"}`}>
                        <img src={instructor.image} className="rounded-full sm:h-36 sm:w-36 w-20 h-20" alt="" />

                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className={`text-xl font-medium ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>{instructor.name}</h2>

                            <div className={`${theme === 'light' ? "text-gray-900" : "text-gray-400"}`}>
                            <p className="leading-relaxed text-sm font-medium mb-3">{instructor.email}</p>
                            <p className="leading-relaxed text-base">Classes: Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            </div>

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