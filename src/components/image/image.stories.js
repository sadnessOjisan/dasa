import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Image from "./Image";

console.log("Image: ", Image);

storiesOf("Image", module)
  .add("Counter", () => <Image.Counter />)
  .add("Divider", () => <Image.Divider />);
