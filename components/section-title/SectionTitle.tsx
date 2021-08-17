// External dependencies
import React from "react";
import _c from 'classnames';

// Internal dependencies
import { Component, Title, lightClass } from "./SectionTitle.styles";

// Types
import { SectionTitleProps } from "./SectionTitle.types";

interface Props extends SectionTitleProps {
  cssClass?: string;
  light?: boolean;
}

export const SectionTitle = ({ title, cssClass = "", light }: Props) => {
  return (
    <Component className={_c(cssClass)}>
      <Title className={_c(
          "text-uppercase pl-2", 
          light && lightClass, 
          light ? 'text-white' : 'text-primary'
        )}
    >
        {title}
    </Title>
    </Component>
  );
};
