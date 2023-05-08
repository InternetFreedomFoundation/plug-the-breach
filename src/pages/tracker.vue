<template>
  <Layout>
    <!-- <h1 class="text-left underline text-4xl font-bold">Tracker Index</h1> -->
    <div class="">
      <!-- <h1 class="text-4xl font-bold text-teal-900 text-left ml-5 md:ml-10">
        All Leaks
      </h1> -->
      <div
        class="container px-6 sm:px-2 md:grid md:grid-cols-2 lg:grid-flow-row lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <div
          class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mw-full h-64 mb-8 md:mb-0 p-8 md:pl-8 md:py-8"
          v-for="edge in $page.breaches.edges"
          :key="edge.node.id"
        >
          <div class="">
            <div class="mb-5">
              <g-link :to="'/breach/' + edge.node.id">
                <h2 class="leak-title font-bold text-3xl text-teal-900">
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
                <h3 class="ml-1.5 text-teal-600 font-medium">Month Reported</h3>
              </div>
              <div class="flex flex-row">
                <h3 class="ml-0.5 mt-2">——</h3>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex flex-row mt-2">
                <g-image
                  src="~/assets/icons/users.svg"
                  width="20"
                  height="20"
                />
                <h3 class="ml-1.5 text-teal-600 font-medium">
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
