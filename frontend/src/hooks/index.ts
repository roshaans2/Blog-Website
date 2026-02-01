import { useEffect, useState } from "react";
import axios from "axios";

export interface Blog {
    id: string;
    title: string;
    content: string;
    published: string;
    author: {
        name: string;
    };
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        const fetchBlogs = async () => {
            try {
             const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/bulk`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setBlogs(response.data);
            setLoading(false);   
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            }
        };
        fetchBlogs();
    },[])


    return {
        loading,
        blogs
    }
} 

export const useBlog = (id: string) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);
    useEffect(()=>{
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog:", error);
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    return {
        loading,
        blog
    };
};