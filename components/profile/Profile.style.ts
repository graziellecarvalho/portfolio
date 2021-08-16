import styled from "styled-components";

export const Component = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const SocialMedia = styled.div`
  width: 50%;

  a {
    transition: all 0.3s ease;
    display: flex;
    width: 48px;
    height: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a:hover {
    font-size: 48px;
  }
`;

export const ProfilePic = styled.div`
  z-index: 4;
`;

export const ImageLightning = styled.div`
  position: absolute;
  transform: rotate(319deg);
  width: 40px;
  top: 8%;
  right: 0%;

  @media (min-width: 992px) {
    width: 100px;
    top: -10%;
    right: -5%;
  }
`;

export const ImageSemicircle = styled.div`
  position: absolute;
  z-index: -1;
  left: -6%;
  top: -12%;
  width: 84%;
  height: 80%;

  @media (min-width: 992px) {
    left: -20%;
    top: -30%;
    width: 100%;
    height: 100%;
  }
`;

export const ImageTextblock = styled.div`
  width: 90px;
  position: absolute;
  bottom: 0%;
  right: 10%;

  @media (min-width: 992px) {
    width: 130px;
  }
`;
