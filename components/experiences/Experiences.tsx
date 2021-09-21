// External dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import _c from "classnames";
import { BsArrow90DegRight } from "react-icons/bs";

// Internal dependencies
import { Component, Level, RotateIcon } from "./Experiences.style";
import { ExperiencesProps } from "./Experiences.types";
import SectionTitle from "@/components/section-title";

// Types
interface Props extends ExperiencesProps {
  cssClass?: string;
}

export const Experiences = ({ cssClass = "", level }: Props) => {
  return (
    <Component className={`${cssClass} py-9`} id="next-section">
      <Container>
        <SectionTitle title="Experiences" />

        {/* BEGINNER */}

        {level.map(({ type, list, featured }, index) => (
          <Row className="align-items-center mb-2" key={index}>
            <Level className="d-flex align-items-center col-12 col-md-3 col-lg-2 justify-content-md-end">
              <h3 className="my-3 h5">{type}</h3>
              <RotateIcon className="d-md-none text-secondary ml-2">
                <BsArrow90DegRight />
              </RotateIcon>
            </Level>
            <Col xs={12} md={9} className="d-flex flex-wrap">
              {list &&
                list.map(({ item }, index) => (
                  <span
                    key={index}
                    className={_c(
                      featured
                        ? "bg-tertiary text-primary"
                        : "bg-primary text-white",
                      "mr-2 px-5 py-1 font-weight-bold mb-1"
                    )}
                  >
                    {item}
                  </span>
                ))}
            </Col>
          </Row>
        ))}
      </Container>
    </Component>
  );
};
