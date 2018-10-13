import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Center from "./Center";
import Tile from "../tile/Tile";
import GIMG from "../tile/example_image.png";

storiesOf("Center", module)
  .add("center", () => (
    <Tile image={GIMG} isGlobal={true}>
      <Center vertical={true} horizontal={true}>
        😀 😎 👍 💯
      </Center>
    </Tile>
  ))
  .add("center vertical", () => (
    <Tile image={GIMG} isGlobal={true}>
      <Center vertical={true}>😀 😎 👍 💯</Center>
    </Tile>
  ))
  .add("center horizontal", () => (
    <Tile image={GIMG} isGlobal={true}>
      <Center horizontal={true}>😀 😎 👍 💯</Center>
    </Tile>
  ));
