"use client";

import { Button } from "flowbite-react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import Input from "@/components/partials/input/input";

export default function SignUpForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!password.length) {
      setPasswordError("Can't be empty");
      return;
    }
    if (!rePassword.length) {
      setRePasswordError("Can't be empty");
      return;
    }
    if (!emailError.length) {
      setEmailError("Can't be empty");
      return;
    } else if (!re.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if (password.length !== rePassword.length || password !== rePassword) {
      setPasswordError("Password doesn't match");
      setRePasswordError("Password doesn't match");
      return;
    }

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
        setRePasswordError("");
      }}
    >
      <div className="title-container">
        <img src="/assets/images/logo-devlinks-large.svg" alt="logo" />
      </div>
      <div className="content-container flex flex-col gap-3 justify-center">
        <h2 className="heading-m">Create account</h2>
        <p className="body-m">Let’s get you started sharing your links!</p>

        <Input
          error={emailError}
          imageURL={"/assets/images/icon-email.svg"}
          htmlFor={"email"}
          label={"Email address"}
          type={"email"}
          placeholder={"e.g. alex@email.com"}
          value={email}
          onChange={setEmail}
        />
        <Input
          error={passwordError}
          imageURL={"/assets/images/icon-password.svg"}
          htmlFor={"password"}
          label={"Create password"}
          type={"password"}
          placeholder={"At least 8 characters"}
          value={password}
          onChange={setPassword}
        />
        <Input
          error={rePasswordError}
          imageURL={"/assets/images/icon-password.svg"}
          htmlFor={"password"}
          label={"Confirm password"}
          type={"password"}
          placeholder={"At least 8 characters"}
          value={rePassword}
          onChange={setRePassword}
        />

        <p className="body-s tip">
          Password must contain at least 8 characters
        </p>

        <Button className="mt-3" type="submit">
          Submit
        </Button>
        <p className="text-center body-m pt-3">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </form>
  );
}
