import React from 'react'
import Google from '../assets/google logo.svg'
import apple from '../assets/apple.svg'

const SignIn = () => {
    return (
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-left">Welcome!!!</h1>
            <button className="bg-black text-white w-full py-3 rounded-full text-lg mb-4">
              Sign In
            </button>
            <p className="text-center mb-4 text-sm text-gray-700">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 font-medium">
                Sign Up
              </a>
            </p>
            <div className="flex items-center mb-6">
              <hr className="flex-grow border-gray-500" />
              <span className="mx-2 text-gray-700 text-sm">OR</span>
              <hr className="flex-grow border-gray-500" />
            </div>
            <button className="flex items-center justify-center bg-white border border-gray-300 w-full py-3 rounded-lg mb-4">
              <img
                src={Google}
                alt="Google"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-700 font-medium">
                Connect with Google
              </span>
            </button>
            <button className="flex items-center justify-center bg-white border border-gray-300 w-full py-3 rounded-lg">
              <img
                src={apple}
                alt="Apple"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-700 font-medium">
                Connect with Apple
              </span>
            </button>
          </div>
        </div>
      </div>
    );
}

export default SignIn