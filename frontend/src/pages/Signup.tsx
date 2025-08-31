import type { FC } from "react";
import Quote from "../assets/components/Quote";
import Form from "../assets/components/Form";

const Signup: FC = () => {
    return (
        <div className="flex flex-row h-screen">
            <div className="flex justify-center items-center w-full lg:w-1/2">
                <Form type='signup' />
            </div>
            <div className='hidden lg:flex justify-center items-center w-1/2'>
                <Quote />
            </div>
        </div>
    )
};

export default Signup ;