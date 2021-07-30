// External dependencies
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Collapse, Container } from 'react-bootstrap';
import classes from 'classnames';
import { RiArrowDownSLine, RiSearch2Line } from 'react-icons/ri';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

// Internal dependencies
import { Component, Icon, Overlay, SubMenu } from './Header.styles';
import MenuHamburger from '@/components/mobile-menu';
import { MenuProps } from '@/typings/MenuProps';
import SearchForm from '@/components/search-form';
import { MenuItemProps } from '@/typings/MenuItemProps';

// Typing
interface Props {
	menu: MenuProps;
}

export const Header = ({ menu }: Props) => {
	const menuItems: MenuItemProps[] = menu.items;

	// ---------------------------------------
	// STATE TO OPEN THE MOBILE MENU
	const [open, setOpen] = useState(false);
	const [openSearch, setOpenSearch] = useState(false);
	const [menuOpen, setMenuOpen] = useState(null);

	const handleMenu = () => {
		setOpen(!open);
		setOpenSearch(false);
	};

	const handleSearch = () => {
		setOpenSearch(!openSearch);
		setMenuOpen(null);
		setOpen(false);
	};

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
			document.body.style.paddingRight = '0px';
		};
	}, [open]);

	// ---------------------------------------
	// CHECK IF HOME PAGE
	const router = useRouter();
	const [home, setHome] = useState(false);

	useEffect(() => {
		router.pathname === '/' && setHome(true);
	});

	return (
		<Component>
			<Container className="d-flex align-items-center h-100 justify-content-between">
				{/* LOGO */}
				{home ? (
					<h1 className="site-logo mr-auto overlay-index">
						<Link href="/">
							<a
								className={classes((open || !!menuOpen) && 'text-white')}
								title="Website Logo"
							>
								Logo
							</a>
						</Link>
					</h1>
				) : (
					<div className="site-logo mr-auto overlay-index">
						<Link href="/">
							<a className={classes((open || !!menuOpen) && 'text-white')}>Logo</a>
						</Link>
					</div>
				)}

				{/* NAVIGATION */}
				<nav className="navigation d-none d-md-block" role="navigation">
					<ul className="list-unstyled d-flex m-0">
						{menuItems.map(
							({ href, text, target, rel, additionalClass, subitems }, index) => (
								<li key={index} className="mr-3 mx-md-1 text-primary d-none d-xl-block">
									{subitems.length ? (
										<>
											<button
												className={classes(
													'btn overlay-index',
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
												<SubMenu className="bg-primary">
													<ul className="py-9 px-5 list-unstyled w-100 container">
														{subitems.map(({ text, href, target, rel }, index) => (
															<li key={index} className="text-left w-100">
																<Link href={href}>
																	<a
																		onClick={() => setMenuOpen(null)}
																		target={target}
																		rel={rel}
																		className="pb-2 unstyled-link mb-4 text-white d-block"
																		dangerouslySetInnerHTML={{
																			__html: text,
																		}}
																	/>
																</Link>
															</li>
														))}
													</ul>
												</SubMenu>
											</Collapse>
										</>
									) : (
										<Link href={href}>
											<a className="btn overlay-index" target={target} rel={rel}>
												{text}
											</a>
										</Link>
									)}
								</li>
							),
						)}
					</ul>
				</nav>
				{!!menuOpen && <Overlay onClick={() => setMenuOpen(null)} />}
				{openSearch && <Overlay onClick={handleSearch} />}

				{/* SEARCH */}
				<Icon onClick={handleSearch} aria-controls="_search" className="overlay-index ml-auto">
					<span className="sr-only">
						{openSearch ? 'Click to close search bar' : 'Click to open search bar'}
					</span>
					{openSearch ? <AiOutlineClose size={30} /> : <RiSearch2Line size={30} />}
				</Icon>

				{/* BURGER ICON */}
				<Icon
					onClick={handleMenu}
					aria-controls="_mobile-menu"
					className="overlay-index ml-4 d-block d-xl-none"
				>
					<span className="sr-only">
						{open ? 'Click to close menu' : 'Click to open menu'}
					</span>
					{open ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
				</Icon>

				{/* MOBILE MENU */}
				<MenuHamburger menuItems={menuItems} open={open} />
			</Container>

			{/* SEARCH FIELD */}
			<SearchForm handleSearch={handleSearch} open={openSearch} />
		</Component>
	);
};
