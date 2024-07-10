import { Button, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  error: string;
  imageURL: string;
  htmlFor: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: (x: string) => void;
  value: string;
}

export default function Input(props: Props) {
  const [value, setValue] = useState("");
  const [className, setClassName] = useState("");
  return (
    <div className="input-component">
      <div className="mb-2 block">
        <Label
          className={`body-s ${!!props.error && "error"}`}
          htmlFor={props.htmlFor}
          value={props.label}
        />
      </div>
      <div
        className={`${
          !!props.error && "error"
        } ${className} input-group-custom flex w-full border disabled:cursor-not-allowed disabled:opacity-50`}
      >
        <Image
          // src={"/assets/images/icon-email.svg"}
          src={props.imageURL}
          alt=""
          width={16}
          height={16}
        />
        <TextInput
          className="w-full"
          id={props.label}
          type={props.type}
          placeholder={props.placeholder}
          required
          onFocus={() => setClassName("focus-border")}
          onBlur={() => setClassName("")}
          color="failure"
          helperText={<>{props.error}</>}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
