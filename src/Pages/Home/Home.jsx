import Container from "../../Components/Shared/Container/Container";
import Footer from "./Footer";
import Banner from "./Navbar/Banner";
import Navbar from "./Navbar/Navbar";
import User from "./Navbar/User";

const Home = () => {
    return (
        <>
            <Navbar />
            <Container className="">
                <Banner />
                <User />
            </Container>
            <Footer />
        </>

    );
}

export default Home;