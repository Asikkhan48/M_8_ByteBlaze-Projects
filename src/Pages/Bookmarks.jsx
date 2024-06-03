import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utility/Index";
import BlogCard from "../Components/BlogCard";
import EmptyState from "../Components/EmptyState";

const Bookmarks = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() =>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }, [] )

    const handleDelete = id => {
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }

    if(blogs.length < 1) return <EmptyState message="No Bookmarks Added" address={"/blogs"} label={"Go To Blogs"}></EmptyState>

    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">

                {
                    blogs.map(blog => (<BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>))
                }
               
            </div>
    );
};

export default Bookmarks;