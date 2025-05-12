import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { login,  googleLogIn} = use(AuthContext);
  const location= useLocation()
  console.log(location)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;

    const email = target.email.value;
    const password = target.password.value;

    // login
    login(email, password)
      .then((result) => {
        const reslt= result.user
        console.log(reslt);
        navigate(`${location.state? location.state: '/'}`);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  const handleGoogleLogIn=(e)=>{
    e.preventDefault()
    googleLogIn()
      .then(result=>{
        console.log(result)
        navigate('/')
      })
      .catch(error=>{
        console.log(error)
      })
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-sm text-white">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Welcome Back ✨
        </h2>
        <form onSubmit={handleFormSubmit}>
          {/* email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
          {/* password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg"
          >
            Login
          </button>
          <div className="flex justify-center">
            <button onClick={handleGoogleLogIn} className="cursor-pointer mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold p-2 rounded-full shadow-lg hover:scale-105 transition-transform">
              <FaGoogle size={20} />
            </button>
          </div>
        </form>
        <p className="text-sm text-center mt-6 text-white/70">
          Don't have an account?{" "}
          <Link
            to={"/auth/register"}
            href="/register"
            className="text-cyan-300 hover:text-cyan-400 font-medium underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
