<template>
  <Layout>
    <!-- <h1 class="text-left underline text-4xl font-bold">Tracker Index</h1> -->
    <div class="">
      <!-- <h1 class="text-4xl font-bold text-teal-900 text-left ml-5 md:ml-10">
        All Leaks
      </h1> -->
      <div
        class="container
              gap-4
              px-6
              sm:gap-6
              sm:px-2
              md:grid
              md:grid-cols-2
              lg:grid-flow-row
              lg:grid-cols-4"
      >
        <div
          class="mw-full
                mb-8
                flex
                h-64
                flex-col
                overflow-hidden
                rounded-lg
                bg-white
                p-8
                shadow-lg
                md:mb-0
                md:py-8
                md:pl-8"
          v-for="edge in $page.breaches.edges"
          :key="edge.node.id"
        >
          <div class="">
            <div class="mb-5">
              <g-link :to="'/breach/' + edge.node.id">
                <h2 class="leak-title text-3xl font-bold text-teal-900">
                  {{ edge.node.company }}
                </h2>
              </g-link>
            </div>
            <div class="flex flex-col">
              <div class="flex flex-row">
                <g-image
                  src="~/assets/icons/calender.svg"
                  width="20"
                  height="20"
                />
                <h3 class="ml-1.5 font-medium text-teal-600">Month Reported</h3>
              </div>
              <div class="flex flex-row">
                <h3 class="ml-0.5 mt-2">——</h3>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="mt-2 flex flex-row">
                <g-image
                  src="~/assets/icons/users.svg"
                  width="20"
                  height="20"
                />
                <h3 class="ml-1.5 font-medium text-teal-600">
                  Affected Users
                </h3>
              </div>
              <div class="flex flex-row">
                <h3 class="ml-0.5 mt-2">——</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Breaches{
 breaches: allBreach {
    edges {
      node {
        id
        company
        breachDate
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Breach tracker',
    meta: [
      {
        name: 'description',
        content: 'List of historical breaches',
      },
    ],
  },
};
</script>
