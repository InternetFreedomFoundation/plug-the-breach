// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const postcssPlugins = [tailwind()];

module.exports = {
  siteName: "Plug The Breach",
  siteUrl: "https://staging.internetfreedom.in",
  plugins: [
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: process.env.APIKEY, //required
        baseId: process.env.BASEID, //required
        tables: [
          {
            name: "Tracker",
            typeName: "EventPage", //required - needs to match template name
            select: {}, //optional
            links: [], //optional
          },
          // Comment in this section and the line in `templates` for multiple tables!
          // {
          //   name: "Parties",
          //   typeName: "Parties", //required - needs to match template name
          //   select: {}, //optional
          //   links: [], //optional
          // },
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
    EventPage: [
      {
        path: '/tracker/:id',
        component:  './src/templates/EventPage.vue'
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
