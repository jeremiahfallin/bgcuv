import React, { useState } from "react";
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
  headings,
  contentComponent,
}) => {
  const [current, setCurrent] = useState(0);
  const PageContent = contentComponent || Content;
  let sections = content
    .split("<h1")
    .map((section) => {
      return `<h1${section}`;
    })
    .filter((a) => a !== "<h1");

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
                <div className="tabs">
                  <ul>
                    {headings.map((h, i) => {
                      return (
                        <li
                          key={i}
                          className={i === current ? "is-active" : ""}
                          onClick={() => setCurrent(i)}
                        >
                          <a>{h.value}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {sections.map((section, i) => {
                  if (i === current) {
                    return (
                      <PageContent
                        key={i}
                        className="content"
                        content={section}
                      />
                    );
                  } else return <React.Fragment key={i}></React.Fragment>;
                })}
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
  contentComponent: PropTypes.func,
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
        headings={post.headings}
        toc={post.tableOfContents}
      />
    </Layout>
  );
};

ProgramsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProgramsPage;

export const programsPageQuery = graphql`
  query ProgramsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      headings(depth: h1) {
        value
      }
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
