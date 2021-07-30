// External dependencies
import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

// Internal modules
import { Component, Copyright } from './Footer.styles';
import { Config } from '@/config/site';
import { MenuProps } from '@/typings/MenuProps';
import { OptionsProps } from '@/typings/OptionsProps';
import SocialButtons from '@/components/social-buttons';

// Properties definition
interface Props {
	menus: MenuProps[];
	options: OptionsProps;
}

export const Footer = ({ menus, options }: Props) => {
	const socialMenu = menus.find(({ location }) => location === 'social');
	return (
		<Component className={`d-flex justify-content-between mt-auto`}>
			<Container>
				<small>
					<Link href="/">
						<a>
							<strong>{Config.siteName}</strong>
						</a>
					</Link>
					<span className="d-none d-sm-inline">&nbsp;— </span>
					<Copyright className="d-block d-md-inline icon-instagram">
						{options.footer.copyright}
					</Copyright>
				</small>
				{socialMenu && <SocialButtons links={socialMenu.items} cssClass="pt-6" />}
			</Container>
		</Component>
	);
};
