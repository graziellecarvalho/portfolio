import styled from "styled-components";

export const Component = styled.div``;

export const Title = styled.h2`
  position: relative;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;

  &:before {
    content: "";
    width: 200px;
    height: 10px;
    background: #ff2e93;
    left: 0;
    position: absolute;
    z-index: -1;
    bottom: 6px;
  }
`;
