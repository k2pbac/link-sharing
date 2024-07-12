import PreviewItem from "./preview-item";

export default function Preview() {
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
            title={"Github"}
            icon={"/assets/images/icon-github.svg"}
          />
          <PreviewItem
            style={{ backgroundColor: "black" }}
            link={"www.github.com"}
            title={"Github"}
            icon={"/assets/images/icon-github.svg"}
          />
          <PreviewItem
            style={{ backgroundColor: "black" }}
            link={"www.github.com"}
            title={"Github"}
            icon={"/assets/images/icon-github.svg"}
          />
          <PreviewItem
            style={{ backgroundColor: "black" }}
            link={"www.github.com"}
            title={"Github"}
            icon={"/assets/images/icon-github.svg"}
          />
        </div>
      </div>
    </div>
  );
}
