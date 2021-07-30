import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import classes from 'classnames';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Collapse } from 'react-bootstrap';

import { Component } from './MobileMenu.styles';
import { MenuItemProps } from '@/typings/MenuItemProps';

type Props = {
	menuItems: MenuItemProps[];
	open: boolean;
};

export const MobileMenu = ({ menuItems, open }: Props) => {
	// STATE TO OPEN THE MOBILE MENU
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
	}, []);

	// STATE TO GET THE WINDOW DIMENSIONS
	const hasWindow = typeof window !== 'undefined';

	function getWindowDimensions() {
		const width = hasWindow ? window.innerWidth : null;
		const height = hasWindow ? window.innerHeight : null;
		return {
			width,
			height,
		};
	}

	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		if (hasWindow) {
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	}, [hasWindow]);

	const [menuOpen, setMenuOpen] = useState(null);

	return (
		<Component className={classes('bg-primary', { show: open })} height={windowDimensions.height}>
			<div className="inner-menu w-100 px-7 py-8">
				<nav role="navigation">
					<ul className="menu list-unstyled">
						{menuItems.map(
							({ href, text, target, rel, additionalClass, subitems }, index) => (
								<li key={index} className="mb-4">
									{subitems.length ? (
										<>
											<button
												className={classes(
													'btn btn-secondary',
													menuOpen === index + 1 && 'btn-primary',
												)}
												onClick={() =>
													menuOpen !== index + 1
														? setMenuOpen(index + 1)
														: setMenuOpen(null)
												}
											>
												{text}
												<RiArrowDownSLine />
											</button>
											<Collapse in={menuOpen == index + 1}>
												<ul className="py-4 px-3 list-unstyled w-100">
													{subitems.map(({ text, href, target, rel }, index) => (
														<li key={index} className="text-left w-100">
															<Link href={href}>
																<a
																	onClick={() => setMenuOpen(null)}
																	target={target}
																	rel={rel}
																	className="unstyled-link menu-link py-2 text-white"
																	dangerouslySetInnerHTML={{
																		__html: text,
																	}}
																/>
															</Link>
														</li>
													))}
												</ul>
											</Collapse>
										</>
									) : (
										<Link href={href}>
											<a
												className="btn btn-secondary unstyled-link menu-link py-2 text-white"
												target={target}
												rel={rel}
											>
												{text}
											</a>
										</Link>
									)}
								</li>
							),
						)}
					</ul>
				</nav>
			</div>
		</Component>
	);
};
