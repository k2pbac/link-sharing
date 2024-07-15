"use client";

import { Button } from "flowbite-react";
import { useState } from "react";
import CustomLinkInput from "./custom-link-input";
import axios from "axios";
import router from "next/router";
import data from "@/linksList.json";

export default function CustomizeLinks() {
  const [links, setLinks] = useState<Object[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddNewLink = () => {
    setLinks((prev) => [
      ...prev,
      { platform: data[prev.length + 1].item, url: "" },
    ]);
  };

  const addNewLinks = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/links", {
        links,
      });
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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
        <Button onClick={handleAddNewLink} className="add-link-button w-full">
          + Add new link
        </Button>
        {links.length == 0 ? (
          <div className="image-container">
            <>
              <img
                src="/assets/images/illustration-empty.svg"
                alt="empty-links"
              />
              <div className="text-center">
                <h3 className="heading-m">Let's get you started</h3>
                <p className="body-m">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>
            </>
          </div>
        ) : (
          Array.from({ length: links.length }, (_, key) => {
            return <CustomLinkInput key={key} index={key} />;
          })
        )}
      </div>
      <div className="button-container">
        <Button
          onClick={() => addNewLinks()}
          className={`save-button heading-s ${
            links.length == 0 ? "disabled" : ""
          }`}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
