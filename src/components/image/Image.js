import styled from "styled-components";
import CounterGif from "../../assets/counter.gif";
import DividerGif from "../../assets/divider.gif";

const Counter = styled.img.attrs({
  src: CounterGif
})``;

const Divider = styled.img.attrs({
  src: DividerGif
})``;

export default { Counter, Divider };
