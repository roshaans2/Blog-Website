import type { FC } from "react";
import BlogCard from "./BlogCard";

const Blogs: FC = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard
                    authorName="John Doe"
                    title="How an ugly single page website makes $5000 a month without affliate marketing"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is dream for many"
                    publishedDate="2024-06-15"
                />
                <BlogCard
                    authorName="John Doe"
                    title="How an ugly single page website makes $5000 a month without affliate marketing"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is dream for many"
                    publishedDate="2024-06-15"
                />
                <BlogCard
                    authorName="John Doe"
                    title="How an ugly single page website makes $5000 a month without affliate marketing"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is dream for many"
                    publishedDate="2024-06-15"
                />
            </div>
        </div>
    )
};

export default Blogs;