// External dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Internal dependencies
import { Component } from "./About.style";
import { AboutProps } from "./About.types";
import SectionTitle from "../section-title";

// Types
interface Props extends AboutProps {
  cssClass?: string;
}

export const About = ({ cssClass = "" }: Props) => {
  return (
    <Component className={`${cssClass} py-9`}>
      <SectionTitle title="About this project" />
    </Component>
  );
};
