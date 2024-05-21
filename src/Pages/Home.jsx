import Hero from "../Components/Hero";
import wave from "../assets/wave.svg";


const Home = () => {
    return (
        <>
        <Hero></Hero>
        <div className="relative">
            <img className="absolute bottom-0 w-full" src={wave} />
        </div>
        </>
    );
};

export default Home;