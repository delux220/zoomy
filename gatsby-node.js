const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // eslint-disable-next-line
  const createBlogsPosts = new Promise((resolve, reject) => {
    try {
      graphql(`
        {
          allDatoCmsBlogPost {
            nodes {
              slug
            }
          }
        }
      `).then(res => {
        const posts = res.data.allDatoCmsBlogPost.nodes;
        posts.map(post => {
          const { slug } = post;
          createPage({
            path: `/blog/${slug}`,
            component: path.resolve('./src/templates/BlogPost.js'),
            context: {
              slug,
            },
          });
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

  const createListings = new Promise((resolve, reject) => {
    try {
      graphql(`
        {
          allDatoCmsListing {
            nodes {
              slug
            }
          }
        }
      `).then(res => {
        const posts = res.data.allDatoCmsListing.nodes;
        posts.map(post => {
          const { slug } = post;
          createPage({
            path: `/listings/${slug}`,
            component: path.resolve('./src/templates/listing.js'),
            context: {
              slug,
            },
          });
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

  // eslint-disable-next-line
  return Promise.all([createBlogsPosts]);
};
