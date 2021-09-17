import styled from "styled-components";

export const Component = styled.div`
  p {
    font-size: 18px;
    color: #1a2d71;
  }
`;

export const Job = styled.div``;

export const RoundedImage = styled.div`
  div {
    height: 250px;
    width: 250px;

    @media (min-width: 768px) {
        height: 200px;
        width: 200px;
    }

    @media (min-width: 1200px) {
        height: 250px;
        width: 250px;
    }
  }
  img {
    object-fit: cover;
  }
`;
