"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";

export default function CustomNav() {
  return (
    <Navbar className="navbar" fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img
          src="/assets/images/logo-devlinks-large.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Devlinks Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="preview-button">Preview</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <a href="#links" className="option active heading-s">
          <img src="/assets/images/icon-links-header.svg" alt="link button" />
          Links
        </a>
        <a href="#profile" className="option">
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
