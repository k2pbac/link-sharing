"use client";

import { Button, Label, TextInput } from "flowbite-react";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordStyle, setPasswordStyle] = useState("");
  const [emailStyle, setEmailStyle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.length) setEmailError("Can't be empty");
    else if (!re.test(email)) {
      setEmailError("Please enter a valid email");
    }
    if (!password.length) setPasswordError("Can't be empty");
    // else if ()
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
              value="Password"
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
              placeholder="Enter your password"
              required
              onFocus={() => setPasswordStyle("focus-border")}
              onBlur={() => setPasswordStyle("")}
              value={password}
              onChange={(e) => setEmail(e.target.value)}
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
