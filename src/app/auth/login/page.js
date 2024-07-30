"use client";

import React from "react";
import LoginForm from "../../../components/LoginForm";

function LoginPage() {
  const onSubmit = (data) => {};
  return (
    <div className="flex items-center justify-center w-full h-screen  bg-black bg-opacity-50">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
export default LoginPage;
