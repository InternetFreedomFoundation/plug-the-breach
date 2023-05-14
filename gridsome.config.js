// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'PlugTheBreach',
  siteDescription: 'An experimental crowdsourced tracker of data breaches by the Internet Freedom Foundation.',
  siteUrl: 'https://staging.internetfreedom.in',
  icon: {
    favicon: './src/assets/favicon.png',
  },
  titleTemplate: 'PlugTheBreach - %s',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        // Required. This is the API key for the base
        apiKey: process.env.AIRTABLE_API_KEY,
        // Required. This is the ID of your base
        baseId: process.env.AIRTABLE_BASE_ID,
        tables: [
          {
            // Required. This is the name or ID of your chosen workspace table
            name: 'tblcIW50VAja6TEGi',
            // Required. This is the GraphQL typename and needs to match the template name
            typeName: 'Breach',
            // Optional. Selects which columns to retreive, else all columns will be retrieved
            select: {},
            // Optional. Generates links between entries in this table and entries in other tables
            links: [],
          },
        ],
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {},
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        include: ['/', '/blog/**'],
      },
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['company', 'description'],
        collections: [
          {
            typeName: 'Breach',
            indexName: 'breach',
            fields: ['id', 'company', 'breachDate', 'affectedUsersMn'],
          },
        ],
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss2',
      options: {
        tailwindConfigFile: './tailwind.config.js',
        mainCssFile: './src/main.css',
      },
    },
  ],
  templates: {
    Breach: [
      {
        path: '/breach/:id',
        component: './src/templates/Breach.vue',
      },
    ],
  },
  transformers: {
    remark: {
      plugins: [
        [
          'remark-autolink-headings',
          {
            behavior: 'wrap',
            linkProperties: {
              ariaHidden: 'true',
              tabIndex: -1,
            },
          },
        ],
        [
          'gridsome-plugin-remark-prismjs-all',
          {
            showLineNumbers: true,
            aliases: {
              vue: 'html',
              cmd: 'bash',
              dos: 'bash',
            },
          },
        ],
      ],
    },
  },
};
