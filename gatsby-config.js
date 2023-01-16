/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Unimax Global`,
    siteUrl: `https://unimaxglobal.net`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",

    {
      gatsbyRemarkPlugins: [
        {
          options: {
            maxWidth: 1920,
          },
          resolve: "gatsby-remark-images",
        },
        {
          resolve: `gatsby-remark-relative-images`,
          options: {
            // [Optional] The root of "media_folder" in your config.yml
            // Defaults to "static"
            staticFolderName: "static",
            // [Optional] Include the following fields, use dot notation for nested fields
            // All fields are included by default
            // include: ["featured"],
            // [Optional] Exclude the following fields, use dot notation for nested fields
            // No fields are excluded by default
            // exclude: ["featured.skip"],
          },
        },
      ],
      options: {
        extensions: [".mdx", ".md", ".markdown"],
      },
      resolve: "gatsby-plugin-mdx",
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      options: {
        defaults: {
          formats: ["auto", "avif", "webp"],
          placeholder: "blurred",
          quality: 70,
        },
      },
      resolve: "gatsby-plugin-sharp",
    },
    "gatsby-transformer-sharp",
    {
      resolve: "@slixites/gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "dm serif display:400,600",
          "hanken grotesk:300,400,500,600,700,900",
        ],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload prefetch",
          as: "style",
        },
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/uploads`,
        name: "uploads",
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "services",
        path: "./src/contents/services",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/contents/projects",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "team",
        path: "./src/contents/team",
      },
    },
  ],
};
