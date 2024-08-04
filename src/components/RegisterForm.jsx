import React, { useState } from "react";

function RegisterForm() {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const addUser = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      const jsonResponse = await response.json();
    } catch (e) {
      console.log(e);
    }
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
    await addUser(userData);
  };

  return (
    <div className="relative w-80 min-w-fit max-w-md mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="w-full py-2 px-4 mb-4 rounded bg-gray-200 text-gray-700">
          Register
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
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm text-gray-700">
            Username
          </label>
          <input
            type="username"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className=" w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="johndoe123"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className=" w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="********"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="passwordConfirmation"
            className="block text-sm text-gray-700"
          >
            Password Confirmation
          </label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={userData.passwordConfirmation}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="********"
          />
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;

//? Previous Form
// import { useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { joiResolver } from "@hookform/resolvers/joi";
// import Joi from "joi";

// const createUserSchema = Joi.object({
//   email: Joi.string()
//     .email({ tlds: { allow: false } })
//     .required()
//     .messages({
//       "string.email": "Not a valid email",
//       "any.required": "Email is required",
//     }),
//   username: Joi.string().required().messages({
//     "any.required": "Username is required",
//   }),
//   password: Joi.string().min(6).required().messages({
//     "string.min": "Password must be more than 5 chars",
//     "any.required": "Password is required",
//   }),
// });

// function RegisterPage() {
//   const router = useRouter();
//   const [registerError, setRegisterError] = useState(null);
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     resolver: joiResolver(createUserSchema),
//   });

//   async function onSubmit(payload) {
//     try {
//       await axios.post(
//         `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/users`,
//         payload
//       );
//       router.push("/auth/login");
//     } catch (error) {
//       console.log(error.response);
//       setRegisterError(error.message);
//     }
//   }

//   return (
//     <>
//       <p>{registerError}</p>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-element">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             placeholder="jane.doe@example.com"
//             {...register("email")}
//           />
//           <p>{errors.email?.message}</p>
//         </div>

//         <div className="form-element">
//           <label htmlFor="username">Username</label>
//           <input
//             id="username"
//             type="text"
//             placeholder="username"
//             {...register("username")}
//           />
//           <p>{errors.username?.message}</p>
//         </div>

//         <div className="form-element">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             placeholder="password"
//             {...register("password")}
//           />
//           <p>{errors.password?.message}</p>
//         </div>

//         <button type="submit">SUBMIT</button>
//       </form>
//     </>
//   );
// }

// export default RegisterPage;
