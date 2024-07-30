import React, { useState } from "react";
import getGoogleOAuthUrl from "../../utils/getGoogleUrl";

function LoginForm({ onSubmit }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Example validation
    if (!form.email || !form.password) {
      setError("Email and Password are required");
      return;
    }
    setError("");
    onSubmit(form);
  };

  return (
    <div className="relative w-80 min-w-fit max-w-md mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="w-full py-2 px-4 mb-4 rounded bg-gray-200 text-gray-700">
          Login
        </div>

        {error && <div className="mb-4 text-red-500">{error}</div>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="you@example.com"
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
            value={form.password}
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
            Login
          </button>
          <span className="flex justify-center items-center mt-2 text-sm text-gray-700">
            or
          </span>
          <a
            href={getGoogleOAuthUrl()}
            className="flex justify-center items-center w-full p-2 mt-2 rounded-md text-white bg-red-500 hover:bg-red-600"
          >
            Login with Google
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

//? Me network call
// // pages/api/me.js
// import fetcher from "../../utils/fetcher";

// export default async function handler(req, res) {
//   try {
//     const data = await fetcher(
//       `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
//       req.headers
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// }

//? Previous Form
// import { useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { joiResolver } from "@hookform/resolvers/joi";
// import Joi from "joi";
// import getGoogleOAuthUrl from "../../../utils/getGoogleUrl";

// const createSessionSchema = Joi.object({
//   email: Joi.string()
//     .email({ tlds: { allow: false } })
//     .required()
//     .messages({
//       "string.email": "Not a valid email",
//       "any.required": "Email is required",
//     }),
//   password: Joi.string().min(6).required().messages({
//     "string.min": "Password must be more than 5 chars",
//     "any.required": "Password is required",
//   }),
// });

// function LoginPage() {
//   const router = useRouter();
//   const { loginError, setLoginError } = useState(null);
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     resolver: joiResolver(createSessionSchema),
//   });

//   async function onSubmit(payload) {
//     try {
//       await axios.post(
//         `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`,
//         payload,
//         { withCredentials: true }
//       );
//       router.push("/");
//     } catch (error) {
//       setLoginError(error.message);
//     }
//   }
//   <div className="bg-red-500">
//     <p>{loginError}</p>
//     <form onSubmit={handleSubmit(onSubmit)} className="bg-red-500">
//       <div className="form-element">
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           placeholder="jane.doe@example.com"
//           {...register("email")}
//         />
//         <p>{errors.email?.message}</p>
//       </div>

//       <div className="form-element">
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           placeholder="password"
//           {...register("password")}
//         />
//         <p>{errors.password?.message}</p>
//       </div>

//       <a href={getGoogleOAuthUrl()}>Login with Google</a>

//       <button type="submit">SUBMIT</button>
//     </form>
//   </div>;
//   return <div className="bg-red-500">hello</div>;
// }

// export default LoginPage;
