// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Layout } from './HomeLayout.styles';
import { OptionsProps } from '@/typings/OptionsProps';
import { RouteProps } from '@/typings/RouteProps';
import { MenuProps } from '@/typings/MenuProps';
import { HomeLayoutProps } from './HomeLayout.types';
import Profile from '@/components/profile';

// Types
// interface Props {
// 	route: RouteProps;
// }

// export const HomeLayout = ({ route }: Props) => {
// 	const content = route.content as HomeLayoutProps;

// 	return (
// 		<Layout context={route}>
// 			<Container>
// 				<strong>Home</strong> Layout
// 				<h1>{route.title}</h1>
// 				<pre>{JSON.stringify(content, null, '\t')}</pre>
// 			</Container>
// 		</Layout>
// 	);
// };


export const HomeLayout = () => {

	return (
		<Layout>
			<Container>
				<Profile
					name="Grazielle"
					description="Frontend designer since 2019 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis enim ut ante auctor malesuada. Vivamus pulvinar nunc sed nulla feugiat, nec consectetur erat interdum. Nam venenatis magna in purus convallis, eu aliquet est vulputate. Sed sit amet nisi quis elit accumsan aliquet vitae vel justo. Nam dignissim efficitur dapibus. "
					social_media={[
						{
							icon: 'github',
							url: 'https://github.com/graziellecarvalho',
							label: 'gitbut social media'
						},
						{
							icon: 'linkedin',
							url: 'https://www.linkedin.com/in/graziellepcarvalho/',
							label: 'linkedin social media'
						},
						{
							icon: 'stackoverflow',
							url: 'https://stackoverflow.com/users/14670710/grazielle-carvalho',
							label: 'stackoverflow social media'
						},
					]}
				/>
			</Container>
		</Layout>
	);
};
