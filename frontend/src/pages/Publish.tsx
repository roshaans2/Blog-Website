import { useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { useNavigate } from "react-router";

const Publish = () => {
    const [formInputs, setFormInputs] = useState({ title: '', content: '' });
    const navigate = useNavigate();
    const publishBlog = async () => {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/blog`, formInputs, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        navigate(`/blog/${response.data.id}`);
    }
    return (
        <div>
            <Appbar />
            <div className="flex justify-center w-full pt-12">
                <div className="max-w-screen-lg w-full space-y-4">
                    <input onChange={(e) => setFormInputs({...formInputs, title: e.target.value})} type="text" id="visitors" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Title" required />
                    <textarea onChange={(e) => setFormInputs({...formInputs, content: e.target.value})} id="message" rows={4} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write your thoughts here..."></textarea>
                    <button onClick={() => {
                        publishBlog();
                    }} type="button" className=" bg-gray-600 rounded-md px-5 py-2.5 text-white font-semibold mr-4 cursor-pointer">
                        Publish
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Publish;