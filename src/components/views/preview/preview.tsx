"use client";

import useMediaStore from "@/state";
import PreviewItem from "./preview-item";
import { Link, userLink } from "@/interfaces";
import User from "@/models/usermodel";
import { useEffect, useState } from "react";
import axios from "axios";

const Preview: React.FC = () => {
  const { linkTypes, profile } = useMediaStore((state) => state);
  const [links, setLinks] = useState<userLink[]>([]);

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: `http://localhost:3000`,
      headers: {
        Accept: "application/json",
      },
    });

    async function Test() {
      const response = await axiosInstance.get("/api/links/", {
        params: {
          email: profile.email,
        },
      });
      console.log(response);
      setLinks(response.data);
    }

    Test();
  }, []);

  return (
    <div className="preview-container">
      <div className="phone-container">
        <img
          src="/assets/images/illustration-phone-mockup.svg"
          alt="link-preview"
        />
        <div className="preview-item-container ">
          {links.length
            ? links.map((link) => {
                return (
                  <PreviewItem
                    style={{ backgroundColor: linkTypes[link.platform].color }}
                    link={"www.github.com"}
                    title={linkTypes[link.platform].item}
                    icon={linkTypes[link.platform].icon}
                  />
                );
              })
            : null}
          {/* <PreviewItem
            style={{ backgroundColor: linkTypes[0].color }}
            link={"www.github.com"}
            title={linkTypes[0].item}
            icon={linkTypes[0].icon}
          />
          <PreviewItem
            style={{ backgroundColor: linkTypes[1].color }}
            link={"www.github.com"}
            title={linkTypes[1].item}
            icon={linkTypes[1].icon}
          />
          <PreviewItem
            style={{ backgroundColor: linkTypes[2].color }}
            link={"www.github.com"}
            title={linkTypes[2].item}
            icon={linkTypes[2].icon}
          />
          <PreviewItem
            style={{ backgroundColor: linkTypes[3].color }}
            link={"www.github.com"}
            title={linkTypes[3].item}
            icon={linkTypes[3].icon}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
