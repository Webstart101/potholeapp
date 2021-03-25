import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {loginContent} from '../static/index';
import { auth, google } from '../Firebase';

const schema = yup.object().shape({
    email: yup.string().required("Invalid Email").email(),
    password: yup.string().required("Invalid Password").min(5),
})

const Login = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, errors, watch } = useForm({
        resolver: yupResolver(schema),
    });
    const { signin, currentUser } = useAuth();
    const email = useRef();
    const password = useRef();
    const history = useHistory();
    const [isError, setIsError] = useState(false)


    const onLogin = async (data) => {
        password.current = watch("password");
        email.current = watch("email");
        setIsError(false)
        try {
          

            setLoading(true);
            setIsError(false)
            await signin(data.email, data.password);
            history.push("/");
        } catch {
            setIsError(true)
        }
        setLoading(false)

    }
    function dbclick(){
        alert("gggg")
    }

    async function googleSignIn(){
        auth.signInWithPopup(google)
        .catch((error)=>{
            console.log(error)
        })
    }


    if (currentUser) {
        return (
            <Redirect to="/" />
        )
    }
    else {

        return (
            <div class="bg-grey-lighter min-h-screen flex flex-col bg-blue-500">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-5 text-3xl text-center">Log In</h1>


                        {isError ? (

                            <div class="bg-red-200 relative text-red-500 py-3 px-3 mb-2">
                                Invalid email or password.
                            </div>
                        ) : (
                            <div class="bg-red-200 relative text-red-500 py-3 px-3 invisible ">

                            </div>


                        )
                        }

                        <form onSubmit={handleSubmit(onLogin)}>
                            {loginContent.inputs.map((input, key) => {
                                return (
                                    <div key={key}>


                                        <label onDoubleClick={dbclick} class="block text-grey-darker text-sm font-bold mb-2">{input.label}</label>
                                        <input class="block border border-grey-light w-full p-3 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            name={input.name}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            ref={register}

                                        />
                                        <p class="text-red-500 pb-2">{errors[input.name]?.message}</p>

                                    </div>
                                );
                            })}
                            <div class="mb-8 text-2xl text-center">

                                <button disabled={loading} class="w-full py-3 text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50  ">Sign In</button>
                                <div>
                                    <Link class="mb-5 mt-2 text-sm text-blue-800 underline" to="/reset-password">Forgot Password ?</Link>
                                </div>
                                <div class="text-center text-sm text-grey-dark mt-4 cursor-default">Dont have an account ?
                            <Link class="text-yellow-600" to="/signup"> Sign up</Link></div>


                            </div>


                        </form>
                        <div>
                            <button onClick={googleSignIn}
                                    disabled={loading}
                                    class="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50  "
                            >SignIn with Google</button>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}
export default Login