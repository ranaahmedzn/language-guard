import axios from "axios";
import PopularClass from "./PopularClass";
import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {

    const { data: popularClasses = [] } = useQuery({
        queryKey: ['popular-classes'],
        queryFn: async () => {
            const res = await axios(`/popular-classes`);
            return res.data;
        }
    })

    return (
        <div className="py-20">
            <div className="text-center w-2/3 mx-auto space-y-4 mb-10">
                <h2 className="text-3xl font-bold">Explore our popular classes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem quae explicabo, eveniet quasi perferendis rem commodi eum praesentium! Dolores ullam nostrum beatae a ducimus.</p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    popularClasses.map(popularClass => <PopularClass
                        key={popularClass._id}
                        popularClass={popularClass}
                    ></PopularClass>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;