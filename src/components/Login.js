import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useAuth } from "../auth/Auth";
import { useHistory, Link } from "react-router-dom";
import { auth, google } from "../auth/Firebase";

let schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(5),
});

function Login() {
  const { login, currentUser } = useAuth();

  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser]);

  async function onSubmit(data) {
    const email = data.email;
    const password = data.password;

    try {
      setLoading(true);
      await login(email, password);
      //console.log(currentUser)
      //history.push("/")
    } catch (error) {
      alert(error);
    }

    setLoading(false);
  }

  async function googleSignIn() {
    auth.signInWithPopup(google).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <div className="bg-grey-lighter min-h-screen flex flex-col bg-blue-500">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full ">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <>
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Email
                </label>
              </>
              <>
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  name="email"
                  type="email"
                  ref={register}
                />
              </>
              <p className="messages">{errors["email"]?.message}</p>

              <>
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Password
                </label>
              </>
              <>
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  name="password"
                  type="password"
                  ref={register}
                />
                <Link to="/forgot-password">
                  <p className="text-right">
                    <span className="cursor-pointer text-sm text-yellow-600">
                      Forgot Password?
                    </span>
                  </p>
                </Link>
              </>
              <p className="messages">{errors["password"]?.message}</p>
              <button
                disabled={loading}
                className="w-full py-3 text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 "
                type="submit"
              >
                Login
              </button>
            </form>
            <br />
            <div>
              <div>
                <button
                  onClick={googleSignIn}
                  disabled={loading}
                  className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 "
                  type="submit"
                >
                  SignIn with Google
                </button>
              </div>
            </div>
            <p className="text-center text-sm text-grey-dark mt-4 cursor-default">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="cursor-pointer text-yellow-600">
                  Register Here
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
