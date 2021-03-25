import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link, withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Content, { HTMLContent } from "../components/Content";

export const CovidPageTemplate = ({
  content,
  contentComponent,
  files,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <Hero {...{ title }} />
      <section className="section">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <PostContent content={content} />
              <ul>
                {files &&
                  files.map((file) => {
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
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

CovidPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const CovidPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CovidPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        files={post.frontmatter.files}
        helmet={
          <Helmet titleTemplate="%s | COVID">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

CovidPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CovidPage;

export const covidPageQuery = graphql`
  query CovidPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        files {
          text
          file {
            relativePath
          }
        }
      }
    }
  }
`;
