<template>
  <Layout>
    <div class="mx-auto max-w-md">
      <h1 class="text-center underline text-4xl font-bold">Tracker Index</h1>

      <div
        class="prose text-center mx-auto"
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
      >
        <g-link :to="'/tracker/' + edge.node.id">
          <h2>
            {{ edge.node.company }}
          </h2>
        </g-link>
        <p>status: {{ edge.node.date }}</p>
        <hr />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Events{
 posts: allEventPage {
    edges {
      node {
      id
        company
        date
        status
        notes
        attachments {
          url
          filename
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Breach tracker",
    meta: [
      {
        name: "description",
        content: "List of historical breaches",
      },
    ],
  },
};
</script>
