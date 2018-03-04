const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
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
        console.log(node);
        createPage({
          path: `/articles/${node.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: node.id
          }
        });
      });
      resolve();
    });
  });
};
