import React from "react";
import logo from '../images/asvg.svg'
import { Link } from "react-router-dom";

export default function Login() {
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
                "url(https://source.unsplash.com/720x600/?technology)",
            }}
          />
          <div className="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 p-4">
              <Link to = "/">
            <img 
              src={logo}
              alt="logo"
                /> 
                </Link>
            
          </div>
          <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
            <div className="text-left p-0 font-sans">
              <h1 className=" text-gray-800 text-3xl font-medium">
                Log In
              </h1>
              <h3 className="p-1 text-gray-700">
                Welcome Back! Hope you are with great content :)
              </h3>
            </div>
            <form action="#" className="p-0">
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
              
              <div className="mt-10">
                <input
                  type="submit"
                  defaultValue="Log in with email"
                  className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
                />
              </div>
            </form>
            <Link to="/signup">
              <span className="block  p-5 text-center text-gray-800  text-xs ">
                Don't have an account? Sign up here!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
