"use client";

import { Button, Label, TextInput } from "flowbite-react";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <form className="flex flex-col center-content form justify-center">
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
            <Label className="body-s" htmlFor="email" value="Email address" />
          </div>
          <div
            className={`${emailInput} input-group-custom flex w-full border disabled:cursor-not-allowed disabled:opacity-50`}
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
              onFocus={() => setEmailInput("focus-border")}
              onBlur={() => setEmailInput("")}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="body-s" htmlFor="password" value="Password" />
          </div>
          <div
            className={`${passwordInput} input-group-custom flex w-full border disabled:cursor-not-allowed disabled:opacity-50`}
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
              onFocus={() => setPasswordInput("focus-border")}
              onBlur={() => setPasswordInput("")}
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
