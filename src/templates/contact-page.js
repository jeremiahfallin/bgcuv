import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

export const ContactPageTemplate = ({
  title,
  phone,
  content,
  contentComponent,
  address,
  emailList,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Hero {...{ title }} />
      <section className="section section--gradient">
        <div className="container content">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div className="columns">
                <div className="column">
                  <b>Phone: </b> <a href={`tel:+${phone}`}>{phone}</a>
                  {emailList &&
                    emailList.map((emails) => {
                      return (
                        <div key={emails.text}>
                          <b>{emails.text}</b>:{" "}
                          <a href={`mailto:${emails.email}`}>{emails.email}</a>
                        </div>
                      );
                    })}
                </div>
                <div className="column is-two-thirds">
                  <b>Main Office: </b>
                  <a href={address.url}>{address.address}</a>
                  <div
                    className="column"
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%" /* 16:9 */,
                      paddingTop: 25,
                      height: 0,
                    }}
                  >
                    <iframe
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      frameBorder="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.3287205022825!2d-123.35567028451612!3d43.22356717913841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c422c49484e679%3A0x59f260234d038aee!2s1144%20NE%20Cedar%20St%2C%20Roseburg%2C%20OR%2097470!5e0!3m2!1sen!2sus!4v1596430318987!5m2!1sen!2sus"
                    />
                  </div>
                </div>
              </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        phone={post.frontmatter.phone}
        address={post.frontmatter.address[0]}
        content={post.html}
        emailList={post.frontmatter.emailList}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        phone
        address {
          address
          url
        }
        emailList {
          text
          email
        }
      }
    }
  }
`;
