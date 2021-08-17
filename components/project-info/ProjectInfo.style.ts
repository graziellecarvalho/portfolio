import styled from "styled-components";

export const Component = styled.div``;

export const ImageColumn = styled.div`
    &> div {
        transition: .3s;
    }

    &> div:hover {
        transform: translate(-10px, 10px);
    }

    &:after {
        content: "";
        width: 100%;
        height: 97%;
        position: absolute;
        top: 6%;
        left: -3%;
        background: #1a2d71;
        z-index: -1;
    }
`;

export const Description = styled.div`
    line-height: 1.4;

`;


export const DescriptionColumn = styled.div`
`;
export const Link = styled.a`
    &:hover {
        text-decoration: none;
    }
`;

// background: #00e6b3;