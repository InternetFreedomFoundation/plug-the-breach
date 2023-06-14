// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const PocketBase = require('pocketbase/cjs')

module.exports = function (api) {
  api.loadSource(async (store) => {
    store.addMetadata('baseURL', 'https://plugthebreach.in');
  });

  api.createPages(({ createPage }) => {
    // createPage({
    //   path: "/my-page",
    //   component: "./src/templates/MyPage.vue",
    // });
  });

  api.loadSource(async actions => {
    const pb = new PocketBase('https://content.internetfreedom.in');
    const records = await pb.collection('plug_the_breach').getFullList({
      sort: '-created',
  });

    const collection = actions.addCollection({
      typeName: 'PTB'
    })

    for (const item of records) {
      collection.addNode({
        id: item.id,
        company: item.company
      })
    }
  })
};
