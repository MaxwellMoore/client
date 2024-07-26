"use client";

import React from "react";
import LoginForm from "../../../components/LoginForm";
import RegisterForm from "../../../components/RegisterForm";

function LoginPage() {
  return (
    <div className="flex items-center justify-center w-full h-screen  bg-black bg-opacity-50">
      <LoginForm />
    </div>
  );
}
export default LoginPage;
