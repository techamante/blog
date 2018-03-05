/* eslint react/no-danger: 0 */
import _ from 'lodash';
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { PostHeading, Share } from '../components';

export default ({ data }) => {
  const {
    body: { childMarkdownRemark: { html } },
    featuredImage,
    author,
    createdAt,
    title: { title },
  } = data.contentfulPost;
  console.log(createdAt);
  return (
    <div className="row">
      <div className="col-md-2 col-xs-12">
        <Share />
      </div>
      <div className="col-md-8 col-md-offset-2 col-xs-12">
        <div className="mainheading">
          <PostHeading author={_.head(author)} postDate={createdAt} />

          <h1 className="posttitle">{title}</h1>
        </div>
        {featuredImage && (
          <img
            src={featuredImage.sizes.src}
            alt={title}
            className="featured-image img-fluid"
          />
        )}
        <div
          className="article-post"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <ReactDisqusComments
          shortname="youknownow-1"
          identifier={title}
          title={title}
          url={window.location.href}
        />
      </div>
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
        id
        name
        biography {
          childMarkdownRemark {
            html
          }
        }
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
      createdAt
    }
  }
`;
