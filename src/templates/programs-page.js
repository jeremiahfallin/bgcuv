import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Content, { HTMLContent } from "../components/Content";

export const ProgramsPageTemplate = ({
  image,
  heading,
  title,
  content,
  contentComponent,
  toc
}) => {
  const PageContent = contentComponent || Content;
  const TOC = contentComponent || Content;

  return (
    <div>
      <Hero {...{ image, title: heading }} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <div className="is-parent column is-6">
                  <div className="tile is-child">
                    <TOC className="content toc" content={toc} />
                  </div>
                  <div className="column" />
                </div>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ProgramsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ProgramsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProgramsPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        content={post.html}
        toc={post.tableOfContents}
      />
    </Layout>
  );
};

ProgramsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProgramsPage;

export const programsPageQuery = graphql`
  query ProgramsPage($id: String!) {
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
        heading
      }
      tableOfContents(absolute: true)
    }
  }
`;
