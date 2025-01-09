import React from "react";
import { Button } from "./Button.tsx";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => (
  <Button label="Click the Rabbit" onClick={() => alert("Button clicked!")} />
);
