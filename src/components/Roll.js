import React, { useState } from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Pagination from "./Pagination";

const Roll = ({ data, count }) => {
  const [postNum, setPostNum] = useState(1);
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      {posts && (
        <Pagination
          pageSize={4}
          totalCount={posts.length}
          currentPage={postNum || 1}
          changePage={setPostNum}
        />
      )}
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }, i) => {
            if (postNum * 4 - i > 0 && postNum * 4 - i <= 4) {
              return (
                <div className="is-parent column is-6" key={post.id}>
                  <article
                    className={`blog-list-item tile is-child box notification ${
                      post.frontmatter.featuredpost ? "is-featured" : ""
                    }`}
                  >
                    <header>
                      {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                      <p className="post-meta">
                        <Link
                          className="title has-text-primary is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <span className="subtitle is-size-5 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    </header>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </article>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Roll;
