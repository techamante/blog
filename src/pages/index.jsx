import React from 'react';
import moment from 'moment';
import g from 'glamorous';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

export default ({ data: { allContentfulPost: { totalCount, edges } } }) => (
  <div>
    {edges.map(({ node }) => (
      <div key={node.id} id={node.id} style={{ marginBottom: '15px' }}>
        <Link
          to={`/articles/${node.slug}`}
          css={{ textDecoration: 'none', color: 'inherit' }}
        >
          <g.H2 marginBottom={rhythm(1 / 4)}>
            {node.title.title}
            <div>
              <g.Span color="#BBB">{moment(node.createdAt).fromNow()}</g.Span>
            </div>
          </g.H2>
        </Link>
      </div>
    ))}
  </div>
);

export const query = graphql`
  query IndexQuery {
    allContentfulPost {
      totalCount
      edges {
        node {
          id
          slug
          title {
            title
          }
          createdAt
          author {
            name
          }
        }
      }
    }
  }
`;
