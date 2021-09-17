// External dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

// Internal dependencies
import { Component, Job, RoundedImage } from "./About.style";
import { AboutProps } from "./About.types";
import SectionTitle from "../section-title";

// Types
interface Props extends AboutProps {
  cssClass?: string;
}

export const About = ({ cssClass = "" }: Props) => {
  return (
    <Component className={`${cssClass} py-9`}>
      <Container>
        <SectionTitle title="About this project" />
        <div className="content">
          <p>
            This portfolio was created to demonstrate my experience in the
            Front-end area, putting into practice the technologies I use on a
            daily basis in the creation and maintenance of projects, and also to
            centralize my day-to-day learning.
          </p>

          <h3>Design</h3>
          <p>
            The colors used in the project were based on assets acquired in
            <a href="https://icons8.com/" rel="noopenner">
              icons8
            </a>
            , which inspired me to follow a more cybernetic theme for the entire
            site.
          </p>

          <h3>Development</h3>
          <p>
            The structure that I'm using was cloned from a boilerplate that I
            helped create and to structure it. It's a structure that is
            constantly updated so that we can reuse in future projects.
          </p>
          <p>
            I started with this project to develop for the Sanity CMS.
            Previously, I only had experience in consuming its api and in its
            CMS navigation. For this project I did all the part of configuration
            too. For a simple project like this, I consider the use of Sanity
            very easy.
          </p>
        </div>

        <Job></Job>

        <Row className="justify-content-center">
          <Col xs={12} md={4} lg={3} className="text-center">
            <RoundedImage>
              <Image
                src="/images/design.jpg"
                alt="Grazielle pic"
                width="525"
                height="700"
                className="rounded-circle"
              />
            </RoundedImage>
            <span className="h4">Designer</span>
          </Col>
          <Col xs={12} md={4} lg={3} className="text-center">
            <RoundedImage>
              <Image
                src="/images/front.jpg"
                alt="Grazielle pic"
                width="525"
                height="700"
                className="rounded-circle"
              />
            </RoundedImage>
            <span className="h4">Front End</span>
          </Col>
          <Col xs={12} md={4} lg={3} className="text-center">
            <RoundedImage>
              <Image
                src="/images/Back.png"
                alt="Grazielle pic"
                width="597"
                height="599"
                className="rounded-circle"
              />
            </RoundedImage>
            <span className="h4">Back End</span>
          </Col>
        </Row>
      </Container>
    </Component>
  );
};
