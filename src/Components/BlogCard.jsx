import placeholderImage from "../assets/404.jpg"

const BlogCard = ({blog}) => {

    const {id, title, cover_image, description, published_timestamp} = blog;
    return (
        
        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderImage} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs text-gray-400">{new Date (published_timestamp).toLocaleDateString()}</span>
            <p>{description}</p>
        </div>
    </a>
    
    );
};

export default BlogCard;