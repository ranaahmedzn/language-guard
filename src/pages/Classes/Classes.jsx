import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from "../../components/Container/Container";
import SingleClass from "./SingleClass";

const Classes = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios(`/classes`);
            return res.data;
        }
    })

    return (
        <section className="my-16">
            <Container>
                <div className="text-center w-2/3 mx-auto space-y-4 mb-10">
                    <h2 className="text-3xl font-bold">All the Exciting Classes</h2>
                    <p>Immerse Yourself in All the Exciting Classes and Expand Your Language Skills at Language Guard.</p>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        classes.map(singleClass => <SingleClass
                        key={singleClass._id}
                        singleClass={singleClass}
                        ></SingleClass>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Classes;