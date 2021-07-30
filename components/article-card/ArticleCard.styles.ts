import styled from 'styled-components';
import { rgba } from 'polished';

export const Component = styled.div`
	box-shadow: 0 3px 6px ${({ theme }) => rgba(theme.colors.black, 0.11)};
`;

export const Excerpt = styled.p`
	-webkit-line-clamp: 3;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const Picture = styled.div`
	div {
		height: 250px;
	}

	img {
		object-fit: cover;
	}
`;

export const Badge = styled.span``;

export const Title = styled.h3``;

export const Button = styled.a``;
