"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import { useState } from "react";

interface Keys {
  links: string;
  profile: string;
}

export default function CustomNav() {
  const [active, setActive] = useState({ links: true, profile: false });
  const keys: (keyof Keys)[] = ["links", "profile"];

  function handleClick(x: string) {
    setActive((prev) => {
      for (let i = 0; i < keys.length; i++) {
        keys[i] === x ? (prev[keys[i]] = true) : (prev[keys[i]] = false);
      }
      return { ...prev };
    });
  }

  return (
    <Navbar className="navbar" fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img
          src="/assets/images/logo-devlinks-large.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Devlinks Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="preview-button heading-s">Preview</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <a
          onClick={() => handleClick("links")}
          href="#links"
          className={`option ${active["links"] ? "active" : ""} heading-s`}
        >
          <img src="/assets/images/icon-links-header.svg" alt="link button" />
          Links
        </a>
        <a
          onClick={() => handleClick("profile")}
          href="#profile"
          className={`option ${active["profile"] ? "active" : ""} heading-s`}
        >
          <img
            src="/assets/images/icon-profile-details-header.svg"
            alt="profile button"
          />
          Profile Details
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}
