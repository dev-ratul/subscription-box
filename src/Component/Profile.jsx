import React, { use } from "react";
import Header from "./Header";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "./Footer";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="h-screen flex flex-col justify-between">
      <header>
      <Header></Header>
      </header>
     <main className="">
     <div className="mt-16 max-w-xl mx-auto bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-4">
          <img
            src={
              user?.photoURL || "https://i.ibb.co/2nG4J2k/default-avatar.png"
            }
            alt="User Profile"
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
          />
          <div>
            <h3 className="text-xl font-semibold text-white">
              {user?.displayName || "Guest User"}
            </h3>
            <p className="text-white/70 text-sm">
              {user?.email || "No email found"}
            </p>
          </div>
        </div>
      </div>
     </main>
     <footer>
        <Footer></Footer>
     </footer>
    </div>
  );
};

export default Profile;
