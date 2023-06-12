import { Helmet } from "react-helmet-async";
import Container from "../../../components/Container/Container";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FeedbackSection from "../FeedbackSection/FeedbackSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Language Guard</title>
            </Helmet>
            <Banner />
            <Container>
                <PopularClasses />
                <PopularInstructors />
            </Container>
            <Contact />
            <FeedbackSection />
        </div>
    );
};

export default Home;