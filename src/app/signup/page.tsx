"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import SignUpForm from "@/components/views/signup-form/signup-form";

export default function SignupPage() {
  return (
    <main className="min-w-screen min-h-screen center-content signup-page">
      <SignUpForm />
    </main>
  );
}
