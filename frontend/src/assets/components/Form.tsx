import { useState, type FC } from "react";
import type { SigninInput, SignupInput } from '@robertsdev/medium-common';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


type FormProps = {
    type: 'signup' | 'signin';
};


const Form: FC<FormProps> = ({ type }) => {
    const [formInputs, setFormInputs] = useState<SignupInput | SigninInput>(type === 'signup' ? { name: '', email: '', password: '' } : { email: '', password: '' });
    const navigate = useNavigate();
    const handleSubmit = async() => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/${type}`, formInputs);
            const jwt = response.data.jwt;
            localStorage.setItem('jwt', jwt);
            navigate('/blogs');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="flex flex-col w-3/5 justify-center items-center gap-6">
            <div className="flex flex-col gap-2 items-center">
                <div className="text-4xl font-bold">{type === 'signup' ? 'Create an account' : 'Login'}</div>
                <div className='text-gray-500'>
                    {type === 'signup' ? (
                        <>Already have an account? <Link to="/signin" className="underline">Login</Link></>
                    ) : (
                        <>Don't have an account? <Link to="/signup" className="underline">Signup</Link></>
                    )}
                </div>
            </div>
            {type === 'signup' && (<div className="flex flex-col gap-2 w-full">
                <label className="font-semibold text-md">Username</label>
                <input onChange={(e) => {
                    setFormInputs({
                        ...formInputs,
                        name: e.target.value
                    });
                }} type="text" placeholder="Enter your username" className="border border-gray-300 rounded-md p-2" />
            </div>)}
            <div className="flex flex-col gap-2 w-full">
                <label className="font-semibold text-md">Email</label>
                <input onChange={(e) => {
                    setFormInputs({
                        ...formInputs,
                        email: e.target.value
                    });
                }} type="email" placeholder="m@example.com" className="border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label className="font-semibold text-md">Password</label>
                <input onChange={(e) => {
                    setFormInputs({
                        ...formInputs,
                        password: e.target.value
                    });
                }} type="password" className="border border-gray-300 rounded-md p-2" />
            </div>
            <button onClick={handleSubmit}  className="bg-black text-white w-full py-2 rounded-md mt-4 cursor-pointer">
                {type === 'signup' ? 'Sign Up' : 'Login'}
            </button>
        </div>
    )
}

export default Form;