import React, { Props } from "react";
import styled, { keyframes } from "styled-components";

type Prop = {
  className: string;
  text: string;
};

const Marquee = (props: Props) => {
  const { className, text } = props;
  return (
    <MarqueeStyle>
      <p>{text}</p>
    </MarqueeStyle>
  );
};

const MarqueeStyle = styled.div`
  width: 600px;
  padding: 0.5em 0;
  overflow: hidden;
  background-color: #f6f6f6;
  margin-bottom: 10px;
  position: relative;
  &:after {
    content: "";
    white-space: nowrap;
    padding-right: 50px;
  }

  > p {
    margin: 0;
    padding-left: 600px;
    display: inline-block;
    white-space: nowrap;
    animation: animation;
    -webkit-animation-name: marquee;
    -webkit-animation-timing-function: linear;
    -webkit-animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-name: marquee;
    -moz-animation-timing-function: linear;
    -moz-animation-duration: 10s;
    -moz-animation-iteration-count: infinite;
    -ms-animation-name: marquee;
    -ms-animation-timing-function: linear;
    -ms-animation-duration: 10s;
    -ms-animation-iteration-count: infinite;
    -o-animation-name: marquee;
    -o-animation-timing-function: linear;
    -o-animation-duration: 10s;
    -o-animation-iteration-count: infinite;
    animation-name: marquee;
    animation-timing-function: linear;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
`;

const animation = keyframes`
  from {
    transform: translate(0%);
  }

  to {
    transform: translate(-100%);
  }
`;
