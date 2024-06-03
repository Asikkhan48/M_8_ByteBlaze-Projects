import { useLoaderData } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData();
    const { title, cover_image, description, published_timestamp, tags, body_html, url} = blog;
    
    return (
        <div  
        className="mx-auto group focus:no-underline bg-gray-100">
        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderImage} />

            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">

            {
        tags.map(tag => (
            <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#{tag}</a>
        ))
    }


    </div>

        <div className="p-6 space-y-2">
            <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>

            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
           
        </div>
    </div>
    );
};

export default Content;