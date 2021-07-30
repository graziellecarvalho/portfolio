// External dependencies
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

// Internal dependencies
import { Component } from './Profile.style';
import { ProfileProps } from './Profile.types'

// Types
interface Props extends ProfileProps {
	cssClass?: string;
}

export const Profile = ({ cssClass = '', name, description, social_media }: Props) => {
	return (
		<Component className={`${cssClass}`}>
			<Container>
				<Row className="align-items-center">
					<Col sm={12} md={5}>
						<Image priority src="/images/profile-pic.png" alt="Grazielle pic" width="597" height="599" className="rounded-circle" />
					</Col>
					<Col sm={12} md={7}>
						<h1>{name}</h1>
						<p>{description}</p>

						<h2 className="sr-only">Grazielle's Social media</h2>
						{social_media.map(({ url, icon, label }, index) => (
							<a href={url} target="_blank" aria-label={label}>
								{icon == 'github' && <FaGithub className="text-black h2 mr-6" />}
								{icon == 'linkedin' && <FaLinkedin className="text-black h2 mr-6" />}
								{icon == 'stackoverflow' && <FaStackOverflow className="text-black h2 mr-6" />}
							</a>
						))}
					</Col>
				</Row>
			</Container>
		</Component>
	);
};
