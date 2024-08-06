import React, { useState, useEffect } from "react";
import { getUser } from "../services/api/api";
import getGoogleOAuthUrl from "../../utils/getGoogleUrl";

function LoginForm() {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = {};
    if (!userData.email) newErrors.email = "Email is required";
    if (!userData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const response = await getUser(userData);
      //TODO: Display any errors that may be returned as a response from the server:
      //Example: Not a valid email
      window.location.href = "/";
    }
  };

  return (
    <div className="relative w-80 min-w-fit max-w-md h-fit mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="w-full py-2 px-4 mb-4 rounded bg-gray-200 text-gray-700">
          Login
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 text-sm text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="you@example.com"
          />
          {errors.email && (
            <div className="flex flex-grow justify-center mt-2 bg-red-100 rounded">
              <p className="p-2 text-base text-red-500">{errors.email}</p>
            </div>
          )}
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block text-sm text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 text-sm text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="********"
          />
          {errors.password && (
            <div className="flex flex-grow justify-center mt-2 bg-red-100 rounded">
              <p className="p-2 text-base text-red-500">{errors.password}</p>
            </div>
          )}
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          <span className="flex justify-center items-center mt-2 text-sm text-gray-700">
            or
          </span>
          <a
            href={getGoogleOAuthUrl()}
            className="flex justify-center items-center w-full p-2 mt-2 rounded-md text-white bg-gray-600 hover:bg-gray-700"
          >
            Login with Google
          </a>

          <div className="px-4 py-3 rounded mt-4 bg-gray-200">
            <p className="text-sm text-gray-700">Don't have an account?</p>

            <a
              href="/auth/register"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Register
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
