"use client";

import { Button, Label, TextInput } from "flowbite-react";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();
  const [passwordStyle, setPasswordStyle] = useState("");
  const [emailStyle, setEmailStyle] = useState("");
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const response = await axios.post("/api/users/signup", user);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
    }
  };

  return (
    <form
      noValidate
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col center-content form justify-center"
      onClick={() => {
        setPasswordError("");
        setEmailError("");
      }}
    >
      <div className="title-container">
        <img src="/assets/images/logo-devlinks-large.svg" alt="logo" />
      </div>
      <div className="content-container flex flex-col gap-3 justify-center">
        <h2 className="heading-m">Login</h2>
        <p className="body-m">Let’s get you started sharing your links!</p>
        <div>
          <div className="mb-2 block">
            <Label
              className={`body-s ${!!emailError && "error"}`}
              htmlFor="email"
              value="Email address"
            />
          </div>
          <div
            className={`${
              !!emailError && "error"
            } ${emailStyle} input-group-custom flex w-full border disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <Image
              src={"/assets/images/icon-email.svg"}
              alt=""
              width={16}
              height={16}
            />
            <TextInput
              className="w-full"
              id="email"
              type="email"
              placeholder="e.g. alex@email.com"
              required
              onFocus={() => setEmailStyle("focus-border")}
              onBlur={() => setEmailStyle("")}
              color="failure"
              helperText={<>{emailError}</>}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              className={`body-s ${!!passwordError && "error"}`}
              htmlFor="password"
              value="Create password"
            />
          </div>
          <div
            className={`${
              !!passwordError && "error"
            } ${passwordStyle} input-group-custom flex w-full border disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <Image
              src={"/assets/images/icon-password.svg"}
              alt=""
              width={16}
              height={16}
            />
            <TextInput
              className="w-full"
              id="password"
              type="password"
              placeholder="At least 8 characters"
              required
              onFocus={() => setPasswordStyle("focus-border")}
              onBlur={() => setPasswordStyle("")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color={"failure"}
              helperText={<>{passwordError}</>}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              className={`body-s ${!!passwordError && "error"}`}
              htmlFor="confirm-password"
              value="Confirm assword"
            />
          </div>
          <div
            className={`${
              !!passwordError && "error"
            } ${passwordStyle} input-group-custom flex w-full border disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <Image
              src={"/assets/images/icon-password.svg"}
              alt=""
              width={16}
              height={16}
            />
            <TextInput
              className="w-full"
              id="password"
              type="password"
              placeholder="At least 8 characters"
              required
              onFocus={() => setPasswordStyle("focus-border")}
              onBlur={() => setPasswordStyle("")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color={"failure"}
              helperText={<>{passwordError}</>}
            />
          </div>
        </div>

        <Button className="mt-3" type="submit">
          Submit
        </Button>
        <p className="text-center body-m pt-3">
          Don’t have an account? <Link href="/signup">Create account</Link>
        </p>
      </div>
    </form>
  );
}
