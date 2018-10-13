import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Color from "./index";

storiesOf("Color", module)
  .add("Vivid: red", () => <Tile color={Color.Vivid.red} />)
  .add("Vivid: yellow", () => <Tile color={Color.Vivid.yellow} />)
  .add("Vivid: blue", () => <Tile color={Color.Vivid.blue} />)
  .add("Vivid: green", () => <Tile color={Color.Vivid.green} />)
  .add("Vivid: black", () => <Tile color={Color.Vivid.black} />)
  .add("Vivid: white", () => <Tile color={Color.Vivid.white} />)
  .add("Pastel: red", () => <Tile color={Color.Pastel.red} />)
  .add("Pastel: yellow", () => <Tile color={Color.Pastel.yellow} />)
  .add("Pastel: blue", () => <Tile color={Color.Pastel.blue} />)
  .add("Pastel: green", () => <Tile color={Color.Pastel.green} />)
  .add("Pastel: black", () => <Tile color={Color.Pastel.black} />)
  .add("Pastel: white", () => <Tile color={Color.Pastel.white} />);

const Tile = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${props => props.color};
`;
