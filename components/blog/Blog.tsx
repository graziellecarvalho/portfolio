// External dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import _c from "classnames";

// Internal dependencies
import { Component } from "./Blog.style";
import { BlogProps } from "./Blog.types";
import SectionTitle from "../section-title";
import ArticlesList from "@/components/articles-list";

// Types
interface Props extends BlogProps {
  cssClass?: string;
}

// #1a2d71

export const Blog = ({ cssClass = "" }: Props) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1440 65.4" style="enable-background:new 0 0 1440 65.4;" xml:space="preserve">
<path fill='#1a2d71' d="M1441,66.4H-1V55.6C78.7,36,197.7,22.4,362.5,38.7C679.1,70.2,1250.8,73.7,1440,0L1441,66.4z"/>
</svg>

        
            `,
        }}
      />
      <Component className={_c(cssClass, "bg-primary  py-9")}>
        <Container>
          <SectionTitle title="Blog" light={true} />

          <ArticlesList
            posts={[
              {
                id: 1,
                slug: "first-article",
                title: "First article",
                excerpt: "First article excerpt",
                permalink: "/first-article",
              },
              {
                id: 2,
                slug: "second-article",
                title: "Second article",
                excerpt: "First article excerpt",
                permalink: "/second-article",
              },
              {
                id: 3,
                slug: "third-article",
                title: "Third article",
                excerpt: "First article excerpt",
                permalink: "/third-article",
              },
            ]}
          />
        </Container>
      </Component>
    </>
  );
};
