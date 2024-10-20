import React from 'react'

const MyProfile = () => {
    return (
      <div>
        <div className="flex flex-col md:flex-row justify-center items-start bg-gray-100 p-10 space-y-8 md:space-y-0 md:space-x-10">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex justify-center items-center">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  ></path>

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422A4 4 0 1118 10V8a4 4 0 00-8 0v2a4 4 0 00.84 2.578L12 14z"
                  ></path>

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l-6.16-3.422A4 4 0 106 10v2a4 4 0 001.84 3.578L12 14z"
                  ></path>

                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Rebel Prashanth
                </h2>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-medium text-gray-600">Gmail</p>
                <p className="text-gray-500">rebelprashanth17@gmail.com</p>
              </div>
              <div>
                <p className="font-medium text-gray-600">Phone No</p>
                <p className="text-gray-500">0778516783</p>
              </div>
            </div>
            <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-md w-full text-center">
              Edit Profile
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Favourites
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                Education Mentor
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                Medical Mentor
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                Psychology Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyProfile