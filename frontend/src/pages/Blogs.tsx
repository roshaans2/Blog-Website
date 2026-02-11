import { useEffect, type FC } from "react";
import BlogCard from "./BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "./BlogSkeleton";
import { useNavigate } from "react-router";

const Blogs: FC = () => {
    const user = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if(!user){
            navigate('/signin');
        }
    }, [user, navigate]);

    const { loading, blogs } = useBlogs();

    if(loading){
        return (
            <div>
                <Appbar />
                <BlogSkeleton count={5} />
            </div>
        );
    }
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