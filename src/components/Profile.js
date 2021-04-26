import React from "react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { useAuth } from "../auth/Auth";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }
  
  return (
    <div>
      <Header />
      <div class="flex items-center h-screen w-full justify-center bg-gradient-to-tl from-blue-600 via-blue-400 to-blue-600">
        <div class="max-w-md">
          <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2 shadow-sm">
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src={currentUser.photoURL}
                alt="Profile Picture"
              />
            </div>
            <hr />
            <div class="p-10">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                {currentUser.displayName}
              </h3>
              <table class="text-xs my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{currentUser.email}</td>
                  </tr>
                </tbody>
              </table>
              {/* <div>
                <button
                  className="px-7 py-1 mr-2 w-25 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
