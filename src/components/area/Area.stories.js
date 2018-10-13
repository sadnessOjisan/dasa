import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Area from "../area/Area";
import Color from "../color"

storiesOf("Area", module)
  .add("just area", () => (
    <Area>
        😀 😎 👍 💯
    </Area>
  )).add("color area", () => (
    <Area backgroundColor={Color.Vivid.red}>
        😀 😎 👍 💯
    </Area>
  )).add("wide color area", () => (
    <Area backgroundColor={Color.Pastel.red} width='100vw' height='100vh'>
        😀 😎 👍 💯
    </Area>
  )).add("wide color area with space", () => (
    <Area backgroundColor={Color.Vivid.yellow} width='100vw' height='100vh' space={24}>
        😀 😎 👍 💯
    </Area>
  ))
