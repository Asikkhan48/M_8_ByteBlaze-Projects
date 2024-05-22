import { Link } from "react-router-dom";



const Hero = () => {
    return (
        
         <div className="hero">
  <div className="hero-content text-center">
    
    <div className="max-w-lg">
      <h1 className="text-3xl font-bold">Welcome to <span className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 bg-300% to-green-400 text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
      <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
      
      
      <div className="flex gap-4 justify-center">
      <Link  to="/blogs" className="relative inline-block p-1 font-medium group">
<span className="absolute inset-0 transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white">Read Blog</span>
</Link>
      <Link  to="/bookmarks" className="relative inline-block p-1 font-medium group">
<span className="absolute inset-0 transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white">Bokmarks</span>
</Link>

      </div>
    </div>
  </div>
</div>   
       
    );
};

export default Hero;