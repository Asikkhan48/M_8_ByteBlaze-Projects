import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
         <div className="hero bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-3xl font-bold">Welcome to <span className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 bg-300% to-green-400 text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
      <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
      
      <div className="flex gap-5 justify-center">
        <Link to="/blogs">Read Blogs</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </div>
    </div>
  </div>
</div>   
        </>
    );
};

export default Hero;