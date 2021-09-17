import React from "react";
import Header from "@/components/header";
import Head from "@/components/head";
import Footer from "@/components/footer";
import { OptionsProps } from "@/typings/OptionsProps";
import { MenuProps } from "@/typings/MenuProps";
import { RouteProps } from "@/typings/RouteProps";

type Props = {
  route: RouteProps;
  options: OptionsProps;
  menus: MenuProps[];
  cssClass?: string;
  children?: React.ReactNode;
};

export const Page = ({ route, options, menus, cssClass, children }: Props) => {
  return (
    <div id="page" className={cssClass}>
      <Head />
      {/* <Header menu={menus.find(({ location }) => location === 'header')} /> */}
      <div id="content">{children}</div>
      {/* <Footer menus={menus} options={options} /> */}
    </div>
  );
};
