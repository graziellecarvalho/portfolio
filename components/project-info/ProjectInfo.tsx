// External dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import _c from 'classnames';

// Internal dependencies
import { Component, ImageColumn, Description, Link, DescriptionColumn } from "./ProjectInfo.style";
import { ProjectInfoProps } from "./ProjectInfo.types";

// Types
interface Props extends ProjectInfoProps {
  cssClass?: string;
  position: string;
}

export const ProjectInfo = ({ cssClass = "",  title, description, position, link }: Props) => {
  return (
    <Component className={_c(cssClass, 'mb-6')}>
      <Container>
        <Row className={_c(position == 'odd' && 'flex-md-row-reverse', 'align-items-center')}>
          <Col md={6} xs={12}>
            <ImageColumn className="position-relative">
              <Image
                src="/images/temp/project.png"
                width="579"
                height="361"
                alt="Project"
              />
            </ImageColumn>
          </Col>
          <DescriptionColumn className={_c(position == 'odd' && 'text-md-right', 'col-md-6 col-12')}>
            <h3>{title}</h3>
            <Description className="text-primary font-weight-normal h5" dangerouslySetInnerHTML={{ __html: description }} />
            {link && <Link className="font-weight-bold stretched-link" href={link.href} target={link.target}>{link.text}</Link>}
          </DescriptionColumn>
        </Row>
      </Container>
    </Component>
  );
};
