// External dependencies
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Internal dependencies
import { Component } from './ArticlesList.styles';
import ArticleCard from '@/components/article-card';
import SectionTitle from '@/components/section-title';

// Typing variables
import { ArticlesListProps } from './ArticlesList.types';

interface Props extends ArticlesListProps {
	cssClass?: string;
}

export const ArticlesList = ({ cssClass = '', posts, title }: Props) => {
	return (
		<Component className={`${cssClass}`}>
			<Container>
				{/* TITLE */}
				{title && <SectionTitle title={title} />}
				<Row>
					{posts.length &&
						posts.map((post, index) => (
							<Col md={4} sm={12} key={index} className="mb-5">
								{/* CARD */}
								<ArticleCard
									badge=""
									title={post.title}
									image={post.image}
									excerpt={post.excerpt}
									buttonText="Read article"
									buttonUrl={post.permalink}
								/>
							</Col>
						))}
				</Row>
			</Container>
		</Component>
	);
};
