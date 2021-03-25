import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${(props) => props.height || "100vh"};
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${(props) => props.fit || "cover"} !important;
    object-position: ${(props) => props.position || "50% 50%"} !important;
    font-family: 'object-fit: ${(props) =>
      props.fit || "cover"} !important; object-position: ${(props) =>
  props.position || "50% 50%"} !important;'
  }
`;

export default function Hero({ image, title, subheading, children }) {
  if (image?.childImageSharp) {
    return (
      <Container>
        <BgImage fluid={image.childImageSharp.fluid} />
        <Overlay>
          <div
            className="columns"
            style={{
              display: "flex",
              height: "150px",
              lineHeight: "1",
              justifyContent: "space-around",
              alignItems: "left",
              flexDirection: "column",
            }}
          >
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  boxShadow: "#0081c6 0.5rem 0px 0px, #0081c6 -0.5rem 0px 0px",
                  backgroundColor: "#0081c6",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                  marginBottom: ".5em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                  marginBottom: "1em",
                }}
              >
                <span
                  style={{
                    boxShadow:
                      "#0081c6 0.5rem 0px 0px, #0081c6 -0.5rem 0px 0px",
                    backgroundColor: "#0081c6",
                    padding: "0.25em",
                  }}
                >
                  {subheading}
                </span>
              </h3>
            )}
            <div className="column is-10 is-offset-7">
              <a
                href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=bgcumppqua&id=20"
                className="button is-primary is-large"
              >
                Donate Today
              </a>
            </div>
          </div>
        </Overlay>
      </Container>
    );
  } else {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>
    );
  }
}
