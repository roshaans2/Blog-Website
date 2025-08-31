import type { FC } from "react";
import Form from "../assets/components/Form";
import Quote from "../assets/components/Quote";

const Signin: FC = () => {
    return (
    <div className="flex flex-row h-screen">
        <div className="flex justify-center items-center w-full lg:w-1/2">
            <Form type='signin' />
        </div>
        <div className='hidden lg:flex justify-center items-center w-1/2'>
            <Quote />
        </div>
    </div>
    )
};

export default Signin;