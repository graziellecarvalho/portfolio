import styled from 'styled-components';

export const Component = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 19;
	overflow-y: auto;
	width: 100%;
	padding: 80px 0;
	display: none;

	&.show {
		display: block;
		height: ${({ height }) => height + 'px'};
	}
`;
