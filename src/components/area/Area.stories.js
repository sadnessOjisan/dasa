import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Area from "../area/Area";

storiesOf("Area", module)
  .add("just area", () => (
    <Area>
        😀 😎 👍 💯
    </Area>
  )).add("color area", () => (
    <Area backgroundColor='red'>
        😀 😎 👍 💯
    </Area>
  )).add("wide color area", () => (
    <Area backgroundColor='red' width='100vw' height='100vh'>
        😀 😎 👍 💯
    </Area>
  )).add("wide color area with space", () => (
    <Area backgroundColor='red' width='100vw' height='100vh' space={24}>
        😀 😎 👍 💯
    </Area>
  ))
