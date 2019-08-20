const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'OAuth.xyz',
    description:
      'A new authorization protocol based on concepts from OAuth2 and its extensions.',
    author: '@jricher'
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#883344',
        theme_color: '#883344',
        display: 'minimal-ui',
        icon: 'src/images/xyz.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
