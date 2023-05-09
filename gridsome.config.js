// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Plug The Breach',
  siteUrl: 'https://staging.internetfreedom.in',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        // required. this is the api key for the base
        apikey: process.env.AIRTABLE_API_KEY,
        // required. this is the id of your base
        baseid: process.env.AIRTABLE_BASE_ID,
        tables: [
          {
            // required. this is the name or id of your chosen workspace table
            name: 'tblciw50vaja6tegi',
            // required. this is the graphql typename and needs to match the template name
            typename: 'breach',
            // optional. selects which columns to retreive, else all columns will be retrieved
            select: {},
            // optional. generates links between entries in this table and entries in other tables
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
