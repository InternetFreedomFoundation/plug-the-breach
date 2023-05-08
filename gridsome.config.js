// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Plug The Breach",
  siteUrl: "https://staging.internetfreedom.in",
  plugins: [
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // Required. This is the API key for the base
        baseId: process.env.AIRTABLE_BASE_ID, // Required. This is the ID of your base
        tables: [
          {
            name: "tblcIW50VAja6TEGi", // Required. This is the name or ID of your chosen workspace table
            typeName: "Breach", // Required. This is the GraphQL typename and needs to match the template name
            select: {}, // Optional. Selects which columns to retreive. If not provided, all columns will be retrieved
            links: [], // Optional. Generates links between entries in this table and entries in other tables
          },
        ],
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        remark: {},
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        include: ["/", "/blog/**"],
      },
    },
    {
      use: "gridsome-plugin-tailwindcss2",
      options: {
        tailwindConfigFile: './tailwind.config.js',
        mainCssFile: './src/main.css',
      }
    },
  ],
  templates: {
    Breach: [
      {
        path: '/breach/:id',
        component: './src/templates/Breach.vue'
      }
    ],
  },
  transformers: {
    remark: {
      plugins: [
        [
          "remark-autolink-headings",
          {
            behavior: "wrap",
            linkProperties: {
              ariaHidden: "true",
              tabIndex: -1,
            },
          },
        ],
        [
          "gridsome-plugin-remark-prismjs-all",
          {
            showLineNumbers: true,
            aliases: {
              vue: "html",
              cmd: "bash",
              dos: "bash",
            },
          },
        ],
      ],
    },
  }
};
