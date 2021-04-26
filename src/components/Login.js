import { React, useEffect } from "react";
import { useAuth } from "../auth/Auth";
import { useHistory } from "react-router-dom";
import { auth, google, facebook, twitter, email } from "../auth/Firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function Login() {
  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push("/map");
    }
  }, [currentUser]);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [google.providerId, twitter.providerId, email.providerId],
  };

  return (
    <div className="App">
      <div className="bg-grey-lighter min-h-screen flex flex-col bg-gradient-to-tl from-blue-600 via-blue-400 to-blue-600">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-gray-900 px-6 py-8 rounded shadow-md text-black w-full ">
            <h1 className="mb-8 text-3xl text-center font-bold text-white">
              Login or Register
            </h1>

            <div>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
