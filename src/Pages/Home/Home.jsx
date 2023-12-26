import Container from "../../Components/Shared/Container/Container";
import Footer from "./Footer";
import Banner from "./Navbar/Banner";
import Navbar from "./Navbar/Navbar";
import User from "./Navbar/User";

const Home = () => {
    return (
        <>
        <Container className="">
            <Navbar/>
            <Banner/>
            <User/>
        </Container>
        <Footer/>
        </>
        
    );
}

export default Home;