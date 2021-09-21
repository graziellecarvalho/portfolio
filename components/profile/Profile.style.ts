import styled, { keyframes } from "styled-components";

export const Component = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  p {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    height: 100vh;
  }
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

  div {
    height: 250px;
    width: 250px;

    @media (min-width: 768px) {
        height: 400px;
        width: 400px;
    }
  }

  img {
    object-fit: cover;
  }

  @media (max-width: 767px) {
    text-align: center;
    margin-top: 40px;
  }
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
    left: -3%;
    top: -22%;
    width: 84%;
    height: 80%;


    @media (min-width: 768px) {
        left: -13%;
        top: -22%;
        width: 100%;
      }


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

export const ProfileInfo = styled.div`
  p {
    color: #1a2d71;
  }
`;

export const ImageSection = styled.div`
  margin-top: 40px;
    width: 300px;
    position: relative;

    @media (min-width:768px) {
        width: 400px;
    }
`;

const slideDown = keyframes`
    0%,
    100% {
      transform: translate(0, 0) rotate(90deg);
    }

    50% {
        transform: translate(0, 10px) rotate(90deg);
    }
`;

export const ArrowImage = styled.div`
    animation: ${slideDown} 1s ease-in-out infinite;
    margin-top: 10px;
`;

export const SeeMore = styled.div`
    position: absolute;
    bottom: 60px;
    left: 50%;
    cursor: pointer;
`;