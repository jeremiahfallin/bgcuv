import React from "react";
import PropTypes from "prop-types";
import { graphql, withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

export const InvolvementPageTemplate = ({
  image,
  heading,
  title,
  content,
  contentComponent,
  filesList,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Hero {...{ image, title, heading }} />
      <section className="section section--gradient">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <ul>
                  {filesList &&
                    filesList.map((files) => {
                      return (
                        <div key={files.text}>
                          <li>
                            <b>
                              <p>{files.text}</p>
                            </b>
                          </li>
                          <ul>
                            {files &&
                              files.files &&
                              files["files"].map((file) => {
                                return (
                                  <>
                                    {file.text && (
                                      <li key={file.text}>
                                        {file.file ? (
                                          <a
                                            href={`${withPrefix("/")}img/${
                                              file.file.relativePath
                                            }`}
                                          >
                                            {file.text}
                                          </a>
                                        ) : (
                                          file.text
                                        )}
                                      </li>
                                    )}
                                  </>
                                );
                              })}
                          </ul>
                        </div>
                      );
                    })}
                </ul>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

InvolvementPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const InvolvementPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <InvolvementPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        content={post.html}
        filesList={post.frontmatter.filesList}
      />
    </Layout>
  );
};

InvolvementPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default InvolvementPage;

export const involvementPageQuery = graphql`
  query InvolvementPage($id: String!) {
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
        filesList {
          text
          files {
            text
            file {
              relativePath
            }
          }
        }
      }
    }
  }
`;
