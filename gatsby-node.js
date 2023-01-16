const slugify = require(`@sindresorhus/slugify`);
const path = require("path");
const serviceDetails = path.resolve(`./src/templates/service-details.js`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: `${slugify(node.frontmatter.title)}/`,
    });
  }
};

// customize the GraphQL schema to expose the `testField`
exports.createSchemaCustomization = async ({ actions }) => {
  const { createTypes, createFieldExtension } = actions;
  createFieldExtension({
    name: `slug`,
    extend() {
      return {
        resolve(source) {
          return `${source.fields.slug}`;
        },
      };
    },
  });
  createTypes(`
    type Mdx {
      slug: String @slug
    }`);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "services" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            slug
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  // Create blog post pages.
  const services = result.data.allFile.nodes;

  // you'll call `createPage` for each result
  services.forEach((node) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: "/services/" + node.childMdx.slug,
      component: `${serviceDetails}?__contentFilePath=${node.childMdx.internal.contentFilePath}`,
      context: { slug: node.childMdx.slug },
    });
  });
};
