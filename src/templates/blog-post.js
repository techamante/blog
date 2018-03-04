import React from "react";
import { head } from "lodash";

export default ({ data }) => {
  const {
    body: { childMarkdownRemark: { html } },
    featuredImage: { sizes: { src } },
    title: { title },
    author: { author }
  } = data.contentfulPost;
  console.log(author);
  return (
    <div>
      <img src={src} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const query = graphql`
  query blogPostQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title {
        title
      }
      author {
        name
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        sizes {
          src
        }
      }
    }
  }
`;
