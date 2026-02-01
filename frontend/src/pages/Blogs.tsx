import type { FC } from "react";
import BlogCard from "./BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";

const Blogs: FC = () => {
    const { loading, blogs } = useBlogs();

    if(loading){
        return <div>Loading...</div>;
    }
    console.log('blogs in Blogs page:', blogs);
    return (
        <div>
        <Appbar />
        <div className="flex justify-center">
            <div>
                {
                    blogs?.map((blog: any) => (
                        <BlogCard
                            key={blog.id}
                            authorName={blog.author.name}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={new Date(blog.published).toLocaleDateString()}
                            id={blog.id}
                        />
                    ))
                }
            </div>
        </div>
        </div>
    )
};

export default Blogs;