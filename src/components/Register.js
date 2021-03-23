import { React, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerContent } from '../static/index'
import * as yup from 'yup'
import { useAuth } from '../auth/Auth';
import { useHistory, Link } from 'react-router-dom'
import '../styles/tailwind.css'


let schema = yup.object().shape({
    username: yup.string().required("Invalid Username"),
    email: yup.string().required("Invalid Email").email(),
    password: yup.string().required("Inavlid Password").min(5)
});


function Register() {

    const { signup, currentUser } = useAuth()

    const history = useHistory()

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    }
    );

    async function onSubmit(data) {
        const email = data.email;
        const password = data.password;

        try {
            setLoading(true)
            await signup(email, password)
            history.push("/home")
        } catch (error) {
            alert(error)
        }

        setLoading(false)
    }

    return (

        <div className="App">
            {
                currentUser ? (history.push('/home'))
                    : (
                        <div class="bg-grey-lighter min-h-screen flex flex-col bg-blue-500">
                            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                    <h1 class="mb-8 text-3xl text-center">Register</h1>
                                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                        {registerContent.inputs.map((input, key) => {
                                            return (
                                                <div className="rounded-md shadow-sm -space-y-px" key={key}>
                                                    <>
                                                        <label class="block text-grey-darker text-sm font-bold mb-2">{input.label}</label>
                                                    </>
                                                    <>
                                                        <input
                                                            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                                            name={input.name}
                                                            type={input.type}
                                                            ref={register} />
                                                    </>
                                                    <p className="messages">
                                                        {errors[input.name]?.message}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                        <button disabled={loading} class="w-full py-3 text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 " type="submit">Register</button>

                                        <p class="text-center text-sm text-grey-dark mt-4 cursor-default">Already have an account? <Link to='/login'><span class="cursor-pointer text-yellow-600">SignIn</span></Link></p>

                                    </form>
                                </div>
                            </div>


                        </div>

                    )
            }
        </div>
    )

}

export default Register;