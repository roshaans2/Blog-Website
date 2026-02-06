import type { FC } from "react";
import { useBlog } from "../hooks";
import { useParams } from "react-router";
import { FullBlog } from "../components/FullBlog";
import { BlogDetailSkeleton } from "./BlogSkeleton";
import Appbar from "../components/Appbar";

const Blog: FC = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog(id ?? "");
    if(loading){
        return (
            <div>
                <Appbar />
                <BlogDetailSkeleton />
            </div>
        )
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