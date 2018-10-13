import styled from "styled-components";
import CounterGif from "../../assets/counter.gif";
import DividerGif from "../../assets/divider.gif";
import EmailmeGif from "../../assets/emailme.gif";
import NetscapeGif from "../../assets/ns_logo.gif";
import IeGif from "../../assets/ie_logo.gif";
import FlameGif from "../../assets/flames.gif";

const Counter = styled.img.attrs({
  src: CounterGif
})``;

const Divider = styled.img.attrs({
  src: DividerGif
})``;

const Emailme = styled.img.attrs({
  src: EmailmeGif
})``;

const Netscape = styled.img.attrs({
  src: NetscapeGif
})``;

const Ie = styled.img.attrs({
  src: IeGif
})``;

const Flame = styled.img.attrs({
    src: FlameGif
  })``;

export default { Counter, Divider, Emailme, Netscape, Ie, Flame };
