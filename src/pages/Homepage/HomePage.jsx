import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import ArchitecturalLegacy from "./components/HeritageLegacy.jsx";
import {useNavigate} from "react-router-dom";
const HomePage = () => {
    const navigate = useNavigate();
    const onExploreHandler = () => {
        navigate("/category")
    }
    return (
        <div className='w-[80%] m-auto'>
            <Header/>
            <Hero/>
            <ArchitecturalLegacy onExplore={onExploreHandler}/>
            <Footer/>
        </div>
    )
}

export default HomePage;