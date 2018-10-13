import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Title from "./index";
import Color from "../color/Color";

storiesOf("Title", module)
  .add("H1", () => <Title.H1 background={Color.red}>Hello Title</Title.H1>)
  .add("H2", () => <Title.H2 background={Color.red}>Hello Title</Title.H2>);
