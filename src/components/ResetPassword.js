import React, {useRef, useState} from 'react';
import { useAuth } from '../context/Auth';
import { Link } from 'react-router-dom';

 const ResetPassword = () => {
     const emailRef=useRef();
     const [loading, setLoading] = useState(false);
     const [message, setMessage] = useState("");
     const [isError, setIsError] = useState(false)
     const {resetPassword} = useAuth();

     async function handleReset(e){
            e.preventDefault();

            try{
               
                 setIsError(false);
                setLoading(true)
                    await resetPassword(emailRef.current.value);
                   
                    setMessage("Check your email for further instructions");
            
            }catch{
              
                setIsError(true)
             
                
            }
            setLoading(false)
            
     }
    return (
        <div class="bg-grey-lighter min-h-screen flex flex-col bg-blue-500">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-7 rounded shadow-md text-black w-full">
                    <h1 class="mb-5 text-3xl text-center">Reset Password</h1>

                    {isError ? (

                        <div class="text-red-500 py-3 px-3 mb-2 font-semibold">Failed to reset password. Make sure you are using the correct email address.
                           
                            
                        </div>
                       
                        
                        ) : (
                        <div class=" text-green-600 font-semibold py-2 px-3 ">
                               {message}
                        </div>


                        )
                        }

                    <form onSubmit={handleReset}>

                                    <label class="block text-grey-darker text-sm font-bold mb-2">Email</label>
                                    <input class="block border border-grey-light w-full p-3 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        type="email"
                                        ref={emailRef} 
                                        required
                                        placeholder="email"

                                    />
                              

                          
                        <div class="mb-7 text-2xl text-center">

                            <button disabled={loading} class="w-full py-3 text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 mt-2">Reset now</button>
                           </div>
                           <div class=" flex flex-col text-center">
                             <Link class="text-sm text-blue-800 underline" to="/login">Back to Login</Link>
                           </div>
                        


                    </form>
                </div>
            </div>

        </div>


    )
}

export default ResetPassword