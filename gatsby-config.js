module.exports = {
  siteMetadata: {
    title: `Blah Blah Fake Title`
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yxalsn9it22r`,
        accessToken: `3df98e083dd0c4417ba477c10ac5b99e7e48bc5c6b1a2a066571faacb407188e`
      }
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
