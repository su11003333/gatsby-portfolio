module.exports = {
  siteMetadata: {
    title: "Creative Portfolio & Blog",
    description: "Showcase of design and development work with insights from the studio blog.",
    author: "@yourhandle",
    siteUrl: "https://www.example.com"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Creative Portfolio",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#0f172a",
        theme_color: "#38bdf8",
        display: "minimal-ui",
        icon: "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "works",
        path: `${__dirname}/content/works`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    }
  ]
};
