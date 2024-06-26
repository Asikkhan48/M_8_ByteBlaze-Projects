import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { saveBlogs } from "../Utility/Index";



const Blog = () => {
    const blog = useLoaderData();

	const [tab, setTab] = useState(0);


    const {title, comments_count, cover_image, description, published_timestamp, reading_time_minutes, tags, public_reactions_count} = blog;

	const handleBookmarks = blog => {
		saveBlogs(blog)
	}

    return (
        <div className="max-w-3xl px-6 py-8 mx-auto space-y-12 shadow-lg bg-base-100 border-2">

		
	<article className="space-y-2">
		<div className="space-y-2">
			<h1 className="text-2xl text-center font-bold md:tracking-tight md:text-2xl p-4">{title}</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
					<p className="text-sm">{reading_time_minutes} min read • {new Date(published_timestamp).toLocaleDateString()}</p>
				
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
			</div>
		</div>
		
	</article>
	<div>

        {/* Tab */}
    
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap bg-gray-400 text-gray-500">

					<Link to="" onClick={ () => setTab(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? "border border-b-0" : "border-b"} rounded-t-lg border-gray-400 text-gray-50`}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
						<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
					</svg>
					<span>Content</span>
				</Link>

				<Link to={`author`} onClick={ () => setTab(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? "border border-b-0" : "border-b"} rounded-t-lg border-gray-400 text-gray-50`}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
						<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
					</svg>
					<span>Author</span>
				</Link>

				{/* Bookmark Buton */}
				<div onClick={() => handleBookmarks(blog)} className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden">
				<MdBookmarkAdd size={20} className="text-secondary" />
				</div>
        </div>

	</div>
	<Outlet></Outlet>

</div>
    );
};

export default Blog;