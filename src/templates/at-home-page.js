import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import AtHomeRoll from "../components/AtHomeRoll";

export const AtHomePageTemplate = ({
  title,
  intro,
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content;
  let [current, setCurrent] = useState("All");
  const themes = [
    "Educational Success & Power Hour",
    "Sports & Fitness",
    "S.T.E.A.M. & Arts",
    "Games & Recreation",
    "Healthy Lifestyles",
  ];
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  {intro && (
                    <div className="content">
                      <div className="tile">
                        <h3 className="subtitle">
                          {intro ? intro.description : ""}
                        </h3>
                      </div>
                    </div>
                  )}
                  <div className="content">
                    <div className="select mb-6">
                      <select onChange={(e) => setCurrent(e.target.value)}>
                        <option value={"All"}>Select Topic</option>
                        {themes.map((theme) => (
                          <option key={theme} value={theme}>
                            {theme}
                          </option>
                        ))}
                      </select>
                    </div>
                    {current === "All" &&
                      themes.map((theme) => (
                        <>
                          <h3 className="has-text-weight-semibold is-size-2">
                            {theme}
                          </h3>
                          <AtHomeRoll theme={theme} />
                        </>
                      ))}
                    {current !== "All" &&
                      themes
                        .filter((theme) => theme === current)
                        .map((theme) => (
                          <>
                            <h3 className="has-text-weight-semibold is-size-2">
                              {theme}
                            </h3>
                            <AtHomeRoll theme={theme} />
                          </>
                        ))}
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

AtHomePageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
};

const AtHomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AtHomePageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        intro={frontmatter.intro}
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

AtHomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AtHomePage;

export const atHomePageQuery = graphql`
  query AtHomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro {
          heading
          description
        }
        heading
      }
    }
  }
`;
