import React from "react";
import { Textarea } from "../../../Components/Atom";
import mdx from "./Textarea.mdx";

export default {
  title: "Atom/Textarea",
  component: Textarea,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const _0Default = () => {
  return <Textarea placeholder="Fill this textarea..." />;
};

export const Line = () => {
  return <Textarea model="line" placeholder="Fill this textarea..." />;
};

export const DefaultValue = () => {
  return (
    <Textarea
      inputProps={{
        placeholder: "Fill the field...",
        onChange: e => console.log(e.target.value),
        "data-validation": "require,email"
      }}
    ></Textarea>
  );
};

export const RowsAndCols = () => {
  return (
    <Textarea
      inputProps={{
        rows: "5",
        placeholder: "Fill the field...",
        onChange: e => console.log(e.target.value),
        "data-validation": "require,email"
      }}
    ></Textarea>
  );
};

export const Resize = () => {
  return (
    <Textarea
      inputProps={{
        resize: "vertical",
        placeholder: "Fill the field...",
        onChange: e => console.log(e.target.value),
        "data-validation": "require,email"
      }}
    ></Textarea>
  );
};

export const Disabled = () => {
  return (
    <Textarea
      inputProps={{
        placeholder: "Fill the field...",
        onChange: e => console.log(e.target.value),
        "data-validation": "require,email"
      }}
      disable
    ></Textarea>
  );
};
