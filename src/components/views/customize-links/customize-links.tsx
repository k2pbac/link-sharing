"use client";

import { Button } from "flowbite-react";
import { useState } from "react";

export default function CustomizeLinks() {
  const [linksCount, setLinksCount] = useState(0);

  return (
    <div className="customize-container">
      <div className="header">
        <h2 className="heading-m">Customize your links</h2>
        <p className="body-m">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div className="add-links">
        <Button className="add-link-button w-full">+ Add new link</Button>
        <div className="image-container">
          <img src="/assets/images/illustration-empty.svg" alt="empty-links" />
          <div className="text-center">
            <h3 className="heading-m">Let's get you started</h3>
            <p className="body-m">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button
          className={`save-button heading-s ${
            linksCount == 0 ? "disabled" : ""
          }`}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
