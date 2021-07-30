// External dependencies
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Form, Collapse, Row, Col } from 'react-bootstrap';
import { RiSearch2Line } from 'react-icons/ri';

// Internal dependencies
import { Component, Input } from './SearchForm.styles';
import { useRouter } from 'next/router';

// Typing variables
interface Props {
	open: boolean;
	handleSearch: () => void;
}

export const SearchForm = ({ open, handleSearch }: Props) => {
	const router = useRouter();

	// STATE TO GET THE INPUT TEXT
	const [inputText, setInputText] = useState('');

	const handleInputChange = (e) => {
		setInputText(e.target.value);
	};

	const inputFocus = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (open) {
			inputFocus.current.focus();
			return;
		}

		return () => {
			document.body.style.overflow = 'unset';
			document.body.style.paddingRight = '0px';
			setInputText('');
		};
	});

	const handleSubmitSearchForm = useCallback(
		(e) => {
			e.preventDefault();

			if (inputText !== '') {
				console.log('redirecting', inputText);
				router.push(`/search/${inputText}`);

				handleSearch();
			}
		},
		[inputText],
	);

	return (
		<Collapse in={open}>
			<Component id="collapseSearch">
				<Container className="py-9">
					<Form
						onSubmit={(e) => handleSubmitSearchForm(e)}
						onKeyDown={(e) => {
							if (e.keyCode == 13) {
								handleSubmitSearchForm(e);
							}
						}}
					>
						<Form.Group controlId="formSearch">
							<Form.Label className="sr-only">What are you looking for?</Form.Label>
							<Row className="px-6 px-md-0">
								<Col>
									<Input
										type="text"
										placeholder="What are you looking for?"
										className="pr-0"
										onChange={handleInputChange}
										value={inputText}
										ref={inputFocus}
									/>
								</Col>
								<RiSearch2Line
									onClick={(e) => handleSubmitSearchForm(e)}
									size={40}
									color={'#fff'}
								/>
							</Row>
						</Form.Group>
					</Form>
				</Container>
			</Component>
		</Collapse>
	);
};
