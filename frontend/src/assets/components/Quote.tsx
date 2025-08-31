import type { FC } from "react";

const Quote: FC = () => {
    return (
        <div className="bg-slate-200 w-full h-screen flex justify-center items-center flex-col p-4">
            <div className="max-w-lg text-3xl font-bold italic">
            "The customer service I received was outstanding! They went above and beyond to ensure my satisfaction. Highly recommend!"
            </div>
            <div className="w-full max-w-lg mt-4">
                <div className="text-xl font-semibold">John Doe</div>
                <div className="text-md text-gray-600">CEO, Example Corp</div>
            </div>
        </div>
    )
};

export default Quote;