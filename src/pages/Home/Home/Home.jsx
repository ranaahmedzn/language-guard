import Container from "../../../components/Container/Container";
import Banner from "../Banner/Banner";
import FeedbackSection from "../FeedbackSection/FeedbackSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Banner />
            <Container>
                <PopularClasses />
                <PopularInstructors />
            </Container>
            <FeedbackSection />
        </div>
    );
};

export default Home;