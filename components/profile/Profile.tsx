// External dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

// Internal dependencies
import {
  Component,
  ImageLightning,
  SocialMedia,
  ImageSemicircle,
  ProfilePic,
  ImageTextblock,
  ProfileInfo,
  ImageSection,
  ArrowImage,
  SeeMore
} from "./Profile.style";
import { ProfileProps } from "./Profile.types";

// Types
interface Props extends ProfileProps {
  cssClass?: string;
}

export const Profile = ({
  cssClass = "",
  name,
  description,
  social_media,
}: Props) => {
  return (
    <>
      <Component className={`${cssClass}`}>
        <Container>
          <Row className="align-items-center">
            <Col sm={12} lg={5} className="mb-4 mb-md-0">
              <ImageSection className="mx-auto">
                <ProfilePic>
                    <Image
                    priority
                    src="/images/profile-pic.jpg"
                    alt="Grazielle pic"
                    width="1050"
                    height="700"
                    className="rounded-circle"
                    />
                </ProfilePic>
                {/* DECORATION IMAGES */}
                <ImageLightning>
                    <Image
                    priority
                    src="/images/decoration/lightning.png"
                    alt="Lightning decoration"
                    width="647"
                    height="912"
                    />
                </ImageLightning>
                <ImageSemicircle>
                    <Image
                    priority
                    src="/images/decoration/semicircle.png"
                    alt="Semicircle decoration"
                    width="873"
                    height="909"
                    />
                </ImageSemicircle>
                <ImageTextblock>
                    <Image
                    priority
                    src="/images/decoration/textblock.png"
                    alt="Textblock decoration"
                    width="1288"
                    height="912"
                    />
                </ImageTextblock>
              </ImageSection>
            </Col>
            <Col sm={12} lg={7} className="p-0 px-3 px-md-0 pl-lg-8">
              <h1>{name}</h1>
              {/* <ProfileInfo dangerouslySetInnerHTML={{ __html: description }} /> */}
              <ProfileInfo>
              <p>Front-end developer with 2+ years experience working with <strong>HTML, CSS, JavaScript</strong>, plus modern libraries and frameworks such as <strong>ReactJS and NextJs</strong>. Adept at contributing to a highly collaborative work environment, willing to assist in finding solutions determining customer satisfaction.</p>

                <p>Throughout my career as a front end developer I've emphasized the importance of developing projects that is not only <strong>performative and responsive</strong>, but also <strong>fluid and accessible</strong> for everyone to use.</p>

                <p>Besides my developer experience, I also have experience with Q.A. and project management, since I've also worked on these two fields.</p>

                <p>Motivated, open-minded and adapts easily to any environments and coding styles.</p>
              </ProfileInfo>

              <SocialMedia className="d-flex justify-content-between ml-3">
                <h2 className="sr-only">Grazielle's Social media</h2>
                {social_media.map(({ url, icon, label }, index) => (
                  <a
                    href={url}
                    target="_blank"
                    aria-label={label}
                    className="h2"
                    rel="noopener"
                    key={index}
                  >
                    {icon == "github" && (
                      <FaGithub className="text-gray mr-6" />
                    )}
                    {icon == "linkedin" && (
                      <FaLinkedin className="text-gray mr-6" />
                    )}
                    {icon == "stackoverflow" && (
                      <FaStackOverflow className="text-gray mr-6" />
                    )}
                  </a>
                ))}
              </SocialMedia>
            </Col>
          </Row>
        </Container>
        <Link href="#next-section">
            <SeeMore>
                <ArrowImage>
                    <Image src="/images/decoration/arrow.png" alt="teste" width={40} height={40} />
                </ArrowImage>
            </SeeMore>
        </Link>
      </Component>

     
    </>
  );
};
