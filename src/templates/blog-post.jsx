/* eslint react/no-danger: 0 */

import React from 'react';

export default ({ data }) => {
  const {
    body: { childMarkdownRemark: { html } },
    featuredImage,
    title: { title },
  } = data.contentfulPost;

  return (
    <div>
      {featuredImage && <img src={featuredImage.sizes.src} alt={title} />}
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
