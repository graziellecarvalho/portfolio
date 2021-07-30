import styled from 'styled-components';
import { rgba } from 'polished';

export const Component = styled.header`
	height: 80px;
	.overlay-index {
		position: relative;
		z-index: 51;
	}
`;

export const Icon = styled.button`
	width: 30px;
	background: none;
	border: none;
`;

export const Close = styled.span`
	font-size: 20px;
	font-weight: bold;
`;

export const SubMenu = styled.div`
	position: absolute;
	top: 80px;
	left: 0;
	z-index: 50;
	width: 100%;
`;

export const Overlay = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	z-index: 49;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => rgba(theme.colors.primary, 0.5)};
`;
