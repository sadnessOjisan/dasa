import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Image from "./Image";

storiesOf("Image", module)
  .add("Counter", () => <Image.Counter />)
  .add("Divider", () => <Image.Divider />)
  .add("Emailme", () => <Image.Emailme />)
  .add("Netscape", () => <Image.Netscape />)
  .add("Ie", () => <Image.Ie />)
  .add("Flame", () => <Image.Flame />)