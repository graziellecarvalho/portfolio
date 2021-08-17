// External dependencies
import React from "react";
import { Container } from "react-bootstrap";

// Internal modules
import { Layout } from "./HomeLayout.styles";
import { OptionsProps } from "@/typings/OptionsProps";
import { RouteProps } from "@/typings/RouteProps";
import { MenuProps } from "@/typings/MenuProps";
import { HomeLayoutProps } from "./HomeLayout.types";
import Profile from "@/components/profile";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import About from "@/components/about";

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
              icon: "github",
              url: "https://github.com/graziellecarvalho",
              label: "gitbut social media",
            },
            {
              icon: "linkedin",
              url: "https://www.linkedin.com/in/graziellepcarvalho/",
              label: "linkedin social media",
            },
            {
              icon: "stackoverflow",
              url:
                "https://stackoverflow.com/users/14670710/grazielle-carvalho",
              label: "stackoverflow social media",
            },
          ]}
        />

        <Experiences
          level={[
            {
              type: "Beginner",
              list: [
                {
                  item: "NodeJS",
                },
                {
                  item: "VueJs",
                },
                {
                  item: "Sanity",
                },
              ],
            },
            {
              type: "Intermediate",
              list: [
                {
                  item: "TypeScript",
                },
                {
                  item: "NextJS",
                },
                {
                  item: "JQuery",
                },
                {
                    item: 'PHP'
                }
              ],
            },
            {
              type: "Advanced",
              list: [
                {
                  item: "ReactJs",
                },
                {
                  item: "JavaScript",
                },
                {
                  item: "HTML",
                },
                {
                  item: "CSS",
                },
                {
                  item: "WordPress",
                },
              ],
            },
            {
              type: "Future studies",
              featured: true,
              list: [
                {
                  item: "React Native",
                },
                {
                  item: "Angular",
                },
              ],
            },
          ]}
        />

        <Projects
            projects={[
                {
                    image: {
                        src: '/images/temp/project.png',
                        alt: 'Project',
                        width: 579,
                        height: 361,
                    },
                    title: 'Project title',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus ex euismod leo semper, ac sagittis urna molestie. Donec vitae <strong>lorem pellentesque, viverra est vel,</strong> molestie justo. Nam nibh leo, faucibus nec neque sed, efficitur pulvinar orci. Aliquam eget velit elit. Integer ac euismod erat. Nullam placerat et augue at sollicitudin. ',
                    link: {
                        text: 'Repository',
                        href: '#',
                        target: '_blank',
                    }
                },
                {
                    image: {
                        src: '/images/temp/project.png',
                        alt: 'Project',
                        width: 579,
                        height: 361,
                    },
                    title: 'Project title',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus ex euismod leo semper, ac sagittis urna molestie. Donec vitae lorem pellentesque, viverra est vel, molestie justo. Nam nibh leo, faucibus nec neque sed, efficitur pulvinar orci. Aliquam eget velit elit. Integer ac euismod erat. Nullam placerat et augue at sollicitudin. ',
                },
            ]}
        />

        <About />
      </Container>
    </Layout>
  );
};
