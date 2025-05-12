import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { register, profileUpdate, setUser, errorMessage, setErrorMessage } = use(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const target = e.target;

    const name = target.name.value;
    const image = target.image.value;
    const email = target.email.value;
    const password = target.password.value;

    // Password validation
    if (password.length < 6) {
      setErrorMessage("Your password must be at least 6 characters long.");
      return;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (!hasUppercase) {
      setErrorMessage("Password must contain at least one uppercase letter.");
      return;
    }

    if (!hasLowercase) {
      setErrorMessage("Password must contain at least one lowercase letter.");
      return;
    }

    if (!hasNumber) {
      setErrorMessage("Password must contain at least one number.");
      return;
    }

    // Registration
    register(email, password)
      .then((result) => {
        const userData = result.user;

        // Update profile
        profileUpdate({ displayName: name, photoURL: image })
          .then(() => {
            setUser({ ...userData, displayName: name, photoURL: image });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2b5876] to-[#4e4376] p-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-md text-white">
        <h2 className="text-4xl font-bold text-center mb-6 tracking-wide drop-shadow-md">
          Create Your Account
        </h2>
        {errorMessage && (
          <div className="bg-red-300 text-center py-2 px-3 mb-4 rounded-md">
            <p className="text-black">{errorMessage}</p>
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />
          </div>
          {/* Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="https://example.com/photo.jpg"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-xl"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-6 text-white/70">
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className="text-pink-300 hover:text-blue-400 font-medium underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
