import Calender from "../components/UI/Calender/Calender";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Calender />
            <Footer/>
        </div>
    );
};

export default Home;