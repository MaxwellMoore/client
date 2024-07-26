import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import getGoogleOAuthUrl from "../../../utils/getGoogleUrl";

const createSessionSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Not a valid email",
      "any.required": "Email is required",
    }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be more than 5 chars",
    "any.required": "Password is required",
  }),
});

function LoginPage() {
  const router = useRouter();
  const { loginError, setLoginError } = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: joiResolver(createSessionSchema),
  });

  async function onSubmit(payload) {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`,
        payload,
        { withCredentials: true }
      );
      router.push("/");
    } catch (error) {
      setLoginError(error.message);
    }
  }

  return (
    <>
      <p>{loginError}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="jane.doe@example.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>

        <a href={getGoogleOAuthUrl()}>Login with Google</a>

        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default LoginPage;
