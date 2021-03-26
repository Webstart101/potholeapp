import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full h-screen flex flex-col items-center">
            <div className="m-auto">
                <p className="font-bold text-8xl text-center pb-5">404</p>
                <p className="font-semibold text-5xl text-center">Page not found</p>
                <p className="text-sm text-center pt-5">Oops! The page you are searching for does not exist.
             <br />Click on the button below to return to the homepage.</p>
                <div className="pt-10 flex justify-center">
                    <Link to="/">
                        <button class="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 
                                        px-4 rounded-full">Back to Home</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Error
