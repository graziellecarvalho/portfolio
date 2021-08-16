// External dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

// Internal dependencies
import { Component, ImageColumn } from "./ProjectInfo.style";
import { ProjectInfoProps } from "./ProjectInfo.types";

// Types
interface Props extends ProjectInfoProps {
  cssClass?: string;
}

export const ProjectInfo = ({ cssClass = "" }: Props) => {
  return (
    <Component className={`${cssClass}`}>
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <ImageColumn>
              <Image
                src="/images/temp/project.png"
                width="579"
                height="361"
                alt="Project"
              />
            </ImageColumn>
          </Col>
          <Col md={6} xs={12}></Col>
        </Row>
      </Container>
    </Component>
  );
};
