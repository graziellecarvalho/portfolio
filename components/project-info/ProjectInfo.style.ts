import styled from "styled-components";

export const Component = styled.div``;

export const ImageColumn = styled.div`
  & > div {
    transition: 0.3s;
  }

  & > div:hover {
    transform: translate(-5px, 5px);
  }

  &:after {
    content: "";
    width: 100%;
    height: 97%;
    position: absolute;
    top: 1%;
    left: 0;
    box-shadow: rgb(26 45 113 / 40%) -5px 5px, rgb(26 45 113 / 30%) -10px 10px,
      rgb(26 45 113 / 20%) -15px 15px, rgb(26 45 113 / 10%) -20px 20px,
      rgb(26 45 113 / 5%) -25px 25px;
    z-index: -1;
  }

  &.reverse { 
    &:after {
        box-shadow: rgba(26 45 113 / 0.4) 5px 5px, rgba(26 45 113 / 0.3) 10px 10px, rgba(26 45 113 / 0.2) 15px 15px, rgba(26 45 113 / 0.1) 20px 20px, rgba(26 45 113 / 0.05) 25px 25px;
      }


    & > div:hover {
        transform: translate(5px, 4px);
    }
  }
`;

export const Description = styled.div`
  line-height: 1.4;
`;

export const DescriptionColumn = styled.div``;
export const Link = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

// background: #00e6b3;
