"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginForm from "../../components/flow-views/login-form/login-form";

export default function Login() {
  return (
    <main className="min-w-screen min-h-screen center-content login-page">
      <LoginForm />
    </main>
  );
}
