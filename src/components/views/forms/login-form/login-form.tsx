"use client";

import { Button } from "flowbite-react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import Input from "@/components/partials/input/input";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.length) setEmailError("Can't be empty");
    else if (!re.test(email)) {
      setEmailError("Please enter a valid email");
    }
    if (!password.length) setPasswordError("Can't be empty");
    else {
      try {
        setLoading(true);
        const response = await axios.post("/api/users/login", {
          email,
          password,
        });
        router.push("/");
      } catch (error: any) {
        console.log("Login failed", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
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
        <p className="body-m">
          Add your details below to get back into the app
        </p>
        {!!error ? <p>{error}</p> : null}
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
          label={"Password"}
          type={"password"}
          placeholder={"Enter your password"}
          value={password}
          onChange={setPassword}
        />

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
