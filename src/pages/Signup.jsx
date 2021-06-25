import React from "react";
import logo from "../images/asvg.svg";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <div>
        {/* component */}
        {/* url('/img/hero-pattern.svg') */}
        <div className="flex min-h-screen bg-white">
          <div
            className="w-1/2 bg-cover md:block hidden"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/720x600/?business)",
            }}
          />
          <div className="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 p-4">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="md:w-1/2 max-w-lg mx-auto mt-10 px-4 py-5 shadow-none">
            <div className="text-left p-0 font-sans">
              <h1 className=" text-gray-800 text-3xl font-medium">
                Create an account for free
              </h1>
              <h3 className="p-1 text-gray-700">
                Explore rticle! Make articles! Become Popular!
              </h3>
            </div>
            <form action="#" className="p-0">
              <div className="mt-5">
                <input
                  type="text"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                  placeholder="First Name"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                  placeholder="Last Name"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                  placeholder="Email"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                  placeholder="Password"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                  placeholder="Confirm Password"
                />
              </div>

              <div className="mt-5">
                <textarea
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                  name="description"
                  rows={4}
                  cols={50}
                  placeholder="Let people know about you! Introduce yourself"
                  style={{ resize: "none" }}
                />
              </div>

              <div className="mt-5">
              <label for="file">Your Selfie over here </label>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                />
              </div>

              <div className="mt-10">
                <input
                  type="submit"
                  defaultValue="Sign up with email"
                  className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
                />
              </div>
            </form>
            <Link to="/login">
              <span className="block  p-5 text-center text-gray-800  text-xs ">
                Already have an account?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
