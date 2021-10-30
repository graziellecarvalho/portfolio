// External dependencies
import React from "react";
import { Container } from "react-bootstrap";

// Internal modules
import { Layout } from "./HomeLayout.styles";
import Profile from "@/components/profile";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import About from "@/components/about";
import Blog from "@/components/blog";

export const HomeLayout = () => {
  return (
    <Layout>
      <Profile
        name="Grazielle"
        description="<p>Front-end developer with 2+ years experience working with <strong>HTML, CSS, JavaScript</strong>, plus modern libraries and frameworks such as <strong>ReactJS and NextJs</strong>. Adept at contributing to a highly collaborative work environment, willing to assist in finding solutions determining customer satisfaction.</p>

        <p>Throughout my career as a front end developer I've emphasized the importance of developing projects that is not only <strong>performative and responsive</strong>, but also <strong>fluid and accessible</strong> for everyone to use.</p>
        
        <p>Besides my developer experience, I also have experience with Q.A. and project management, since I've also worked on these two fields.</p>
        
        <p>Motivated, open-minded and adapts easily to any environments and coding styles.</p> "
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
            url: "https://stackoverflow.com/users/14670710/grazielle-carvalho",
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
                item: "Cypress",
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
                item: "PHP",
              },
              {
                item: "WordPress",
              },
              {
                item: "Sanity",
              },
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
                item: "CSS/SCSS",
              },
              {
                item: "Bootstrap",
              },
              {
                item: "JQuery",
              },
            ],
          },
          {
            type: "Others",
            list: [
              {
                item: "Figma",
              },
              {
                item: "Photoshop",
              },
              {
                item: "Trello",
              },
              {
                item: "Monday",
              },
              {
                item: "Jira",
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
                item: "Flutter",
              },
              {
                item: "ESLint",
              },
            ],
          },
        ]}
      />
      <Projects
        projects={[
            {
              image: {
                src: "/images/temp/project.png",
                alt: "Project",
                width: 1420,
                height: 815,
              },
              title: "Pokedéx",
              description:
                "This development was focused on the mobile first concept, where I sketched the layout and functionalities on a mobile resolution, and then adapted it for bigger screen on the development. It's a project where the focus was on the application of the api's consumption, and it's where I`ve found several possibilities to develop filters.",
              repositoryLink: {
                text: "Repository",
                href: "#",
                target: "_blank",
              },
              designLink: {
                text: "Design on Figma",
                href: "#",
                target: "_blank",
              },
            },
        ]}
      />
      <About />
      <Blog />
    </Layout>
  );
};