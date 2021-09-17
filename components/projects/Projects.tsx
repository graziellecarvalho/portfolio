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

export const Projects = ({ cssClass = "", projects }: Props) => {
  return (
    <Component className={`${cssClass} py-9`}>
      <Container>
        <SectionTitle title="Personal Projects" />

        {projects.map((props, index) => (
          <ProjectInfo
            {...props}
            position={(index + 1) % 2 ? "" : "odd"}
            key={index}
          />
        ))}
      </Container>
    </Component>
  );
};
