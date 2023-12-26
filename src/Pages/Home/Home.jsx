import Container from "../../Components/Shared/Container/Container";
import Banner from "./Navbar/Banner";
import Navbar from "./Navbar/Navbar";
import User from "./Navbar/User";

const Home = () => {
    return (
        <Container className="">
            <Navbar/>
            <Banner/>
            <User/>
        </Container>
    );
}

export default Home;