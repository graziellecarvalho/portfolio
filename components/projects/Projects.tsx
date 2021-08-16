// External dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Internal dependencies
import { Component } from "./Projects.style";
import { ProjectsProps } from "./Projects.types";
import SectionTitle from "../section-title";
import ProjectInfo from "../project-info";

// Types
interface Props extends ProjectsProps {
  cssClass?: string;
}

export const Projects = ({ cssClass = "" }: Props) => {
  return (
    <Component className={`${cssClass} py-9`}>
      <SectionTitle title="Projects" />

      <ProjectInfo
        image={{
          src: "/images/temp/project.png",
          width: 579,
          height: 361,
          alt: "Project",
        }}
        title="Pokemon"
        description="teste"
      />
    </Component>
  );
};
