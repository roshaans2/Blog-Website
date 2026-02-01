import type { FC } from "react";
import { useBlog } from "../hooks";
import { useParams } from "react-router";
import { FullBlog } from "../components/FullBlog";

const Blog: FC = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog(id ?? "");
    if(loading){
        return <div>Loading...</div>;
    }
    if(!blog){
        return <div>Blog not found</div>;
    }
    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    );
};

export default Blog;