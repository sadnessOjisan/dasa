import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Title from "./index";
import Color from "../color";

storiesOf("Title", module)
  .add("H1", () => (
    <Title.H1 backgroundColor={Color.Vivid.red}>Hello Title</Title.H1>
  ))
  .add("H2", () => (
    <Title.H2 backgroundColor={Color.Vivid.blue}>Hello Title</Title.H2>
  ))
  .add("H3", () => (
    <Title.H3 backgroundColor={Color.Vivid.black}>Hello Title</Title.H3>
  ))
  .add("H4", () => (
    <Title.H4 backgroundColor={Color.Vivid.green}>Hello Title</Title.H4>
  ));
