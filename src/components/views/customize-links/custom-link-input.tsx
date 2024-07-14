"use client";

import { Label, TextInput, Dropdown } from "flowbite-react";
import { useState } from "react";

interface Props {
  index: number;
}

const linkTypes = [
  { item: "Codepen", icon: "/assets/images/icon-codepen.svg" },
  { item: "Codewars", icon: "/assets/images/icon-codewars.svg" },
  { item: "Devto", icon: "/assets/images/icon-devto.svg" },
  { item: "Facebook", icon: "/assets/images/icon-facebook.svg" },
  { item: "Freecodecamp", icon: "/assets/images/icon-freecodecamp.svg" },
  { item: "Frontend Mentor", icon: "/assets/images/icon-frontend-mentor.svg" },
  { item: "Github", icon: "/assets/images/icon-github.svg" },
  { item: "Gitlab", icon: "/assets/images/icon-gitlab.svg" },
  { item: "Hashnode", icon: "/assets/images/icon-hashnode.svg" },
  { item: "LinkedIn", icon: "/assets/images/icon-linkedin.svg" },
  { item: "Stack Overflow", icon: "/assets/images/icon-stack-overflow.svg" },
  { item: "Twitch", icon: "/assets/images/icon-twitch.svg" },
  { item: "Twitter", icon: "/assets/images/icon-twitter.svg" },
  { item: "Youtube", icon: "/assets/images/icon-youtube.svg" },
];

export default function CustomLinkInput(props: Props) {
  const [link, setLink] = useState(linkTypes[props.index]);
  const getLabel = () => {
    return (
      <p className="input-icon body-m">
        <span className="icon-group">
          <img src={link.icon} alt="link-icon" /> {link.item}
        </span>
        <span className="chevron">
          <img src="/assets/images/icon-chevron-down.svg" alt="down icon" />
        </span>
      </p>
    );
  };

  return (
    <div className="new-link-container">
      <p className="heading-s">
        <img
          className="pr-1 inline"
          src="/assets/images/icon-drag-and-drop.svg"
          alt="icon"
        />{" "}
        Link #{props.index + 1}{" "}
        <span className="body-m remove-button">Remove</span>
      </p>

      <div>
        <div className="mb-2 block">
          <Label className="body-s" htmlFor="platform" value="Platform" />
        </div>
        <Dropdown label={getLabel()} dismissOnClick={true}>
          {linkTypes.map((linkItem, index) => {
            return (
              <Dropdown.Item
                onClick={() => setLink(linkTypes[index])}
                key={index}
                className={link.item === linkTypes[index].item ? "active" : ""}
              >
                <p className="input-icon body-m">
                  <img src={linkItem.icon} alt="link-icon" /> {linkItem.item}
                </p>
              </Dropdown.Item>
            );
          })}
        </Dropdown>
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="body-s" htmlFor="link" value="Link" />
        </div>
        <div className="copy-icon">
          <img
            src="/assets/images/icon-link-copied-to-clipboard.svg"
            alt="copy icon"
          />
          <TextInput id="link" type="text" required />
        </div>
      </div>
    </div>
  );
}
