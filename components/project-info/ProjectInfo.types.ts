import { ImageProps } from "@/typings/ImageProps";
import { LinkProps } from "@/typings/LinkProps";

export interface ProjectInfoProps {
  image: ImageProps;
  title: string;
  description: string;
  repositoryLink?: LinkProps;
  designLink?: LinkProps;
}
