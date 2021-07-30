import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const Component = styled.div`
	top: 80px;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
	position: fixed;
	z-index: 50;
`;

export const Input = styled(Form.Control)`
	background: transparent;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.white};
	border-radius: 0;
	color: ${({ theme }) => theme.colors.white};
	padding-left: 0px;

	&::placeholder {
		color: ${({ theme }) => theme.colors.white};
	}

	&:focus {
		background: transparent;
		box-shadow: none;
		border-color: ${({ theme }) => theme.colors.white};
		color: ${({ theme }) => theme.colors.white};
	}
`;
