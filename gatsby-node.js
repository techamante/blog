const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise(resolve => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              id
              slug
              title {
                title
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPost.edges.forEach(({ node }) => {
        createPage({
          path: `/articles/${node.slug}`,
          component: path.resolve(`./src/templates/blog-post.jsx`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: node.id,
          },
        });
      });
      resolve();
    });
  });
};
