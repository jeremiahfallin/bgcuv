import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, withPrefix } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Content, { HTMLContent } from "../components/Content";

export const JuniorPageTemplate = ({
  image,
  content,
  contentComponent,
  filesList,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <Hero {...{ image, title }} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
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
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

JuniorPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const JuniorPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <JuniorPageTemplate
        image={post.image}
        content={post.html}
        contentComponent={HTMLContent}
        frontImage={post.frontmatter.frontImage}
        filesList={post.frontmatter.filesList}
        helmet={
          <Helmet titleTemplate="%s | Junior">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

JuniorPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default JuniorPage;

export const pageQuery = graphql`
  query JuniorPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
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
