/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  trailingSlash: "never",
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
      ],
      options: {
        extensions: [".mdx", ".md", ".markdown"],
      },
      resolve: "gatsby-plugin-mdx",
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/single-logo.svg",
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
        name: "team",
        path: "./src/contents/team",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/contents/projects",
      },
    },
  ],
};
