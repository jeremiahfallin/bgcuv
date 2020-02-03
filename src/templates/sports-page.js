import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import SportsPostsRoll from "../components/SportsPostsRoll";

export const SportsPageTemplate = ({
  image,
  title,
  intro,
  content,
  contentComponent
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow: "#0081c6 0.5rem 0px 0px, #0081c6 -0.5rem 0px 0px",
              backgroundColor: "#0081c6",
              color: "white",
              lineHeight: "1",
              padding: "0.25em"
            }}
          >
            {title}
          </h1>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  {intro && (
                    <div className="content">
                      <div className="tile">
                        <h1 className="title">{intro ? intro.title : ""}</h1>
                      </div>
                      <div className="tile">
                        <h3 className="subtitle">
                          {intro ? intro.description : ""}
                        </h3>
                      </div>
                    </div>
                  )}
                  <div className="content">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest Sports News
                    </h3>
                    <SportsPostsRoll />
                  </div>
                  <div className="content">
                    <PostContent content={content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

SportsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string
};

const SportsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SportsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        intro={frontmatter.intro}
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

SportsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default SportsPage;

export const sportsPageQuery = graphql`
  query SportsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          title
          description
        }
        heading
      }
    }
  }
`;
