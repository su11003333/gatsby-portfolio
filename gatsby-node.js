const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      works: allWorksJson(sort: { fields: [year], order: DESC }) {
        nodes {
          slug
        }
      }
      posts: allBlogJson(sort: { fields: [date], order: DESC }) {
        nodes {
          slug
        }
      }
    }
  `);

  if (errors) {
    reporter.panic("Error loading content for page creation", errors);
  }

  const workTemplate = path.resolve("./src/templates/work.js");
  const postTemplate = path.resolve("./src/templates/post.js");

  data.works.nodes.forEach((work) => {
    createPage({
      path: `/work/${work.slug}`,
      component: workTemplate,
      context: {
        slug: work.slug
      }
    });
  });

  data.posts.nodes.forEach((post) => {
    createPage({
      path: `/blog/${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug
      }
    });
  });
};
