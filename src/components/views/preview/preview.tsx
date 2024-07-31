"use client";
import useMediaStore from "@/state";
import PreviewItem from "./preview-item";

export default function Preview() {
  const { linkTypes } = useMediaStore((state) => state);

  return (
    <div className="preview-container">
      <div className="phone-container">
        <img
          src="/assets/images/illustration-phone-mockup.svg"
          alt="link-preview"
        />
        <div className="preview-item-container ">
          <PreviewItem
            style={{ backgroundColor: "black" }}
            link={"www.github.com"}
            title={linkTypes[0].item}
            icon={linkTypes[0].icon}
          />
          <PreviewItem
            style={{ backgroundColor: "black" }}
            link={"www.github.com"}
            title={linkTypes[1].item}
            icon={linkTypes[1].icon}
          />
          <PreviewItem
            style={{ backgroundColor: "black" }}
            link={"www.github.com"}
            title={linkTypes[2].item}
            icon={linkTypes[2].icon}
          />
          <PreviewItem
            style={{ backgroundColor: "black" }}
            link={"www.github.com"}
            title={linkTypes[3].item}
            icon={linkTypes[3].icon}
          />
        </div>
      </div>
    </div>
  );
}
