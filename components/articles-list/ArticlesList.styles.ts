import styled from 'styled-components';

export const Component = styled.div`
	.excerpt {
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
	}
	.title {
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
	}
`;
