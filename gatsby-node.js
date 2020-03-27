const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // eslint-disable-next-line
  /*const createBlogsPosts = new Promise((resolve, reject) => {


  /*const createListings = new Promise((resolve, reject) => {
    /* try {
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
  });*/

    const createNeigborhoods = new Promise((resolve, reject) => {
    try {
      graphql(`
        {
          allDatoCmsNeighborhood {
            nodes {
              slug
            }
          }
        }
      `).then(res => {
        const posts = res.data.allDatoCmsNeighborhood.nodes;
        posts.map(post => {
          const { slug } = post;
          createPage({
            path: `/neighborhoods/${slug}`,
            component: path.resolve('./src/templates/Neighborhood.js'),
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
  return Promise.all([createNeigborhoods]);
};
