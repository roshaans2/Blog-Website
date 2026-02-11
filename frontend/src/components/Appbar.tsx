import { Link } from "react-router";
import { Avatar } from "../pages/BlogCard";

const Appbar = () => {
    const userName = localStorage.getItem('username') ?? '';
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to="/blogs">
                <div className="flex justify-center flex-col text-lg font-bold cursor-pointer">
                    Medium
                </div>
            </Link>
            <div>
                <Link to="/publish">
                    <button type="button" className=" bg-gray-600 rounded-full px-5 py-2.5 text-white font-semibold mr-4 cursor-pointer">
                        New
                    </button>
                </Link>
                <Avatar authorName={userName} size="big"/>
            </div>
        </div>
    )
};

export default Appbar;