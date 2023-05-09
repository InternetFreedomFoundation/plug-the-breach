<template>
  <Layout>
    <div class="">
      <input class="stroke-3
                  ring-offset
                  mb-8
                  w-full
                  rounded-full
                  border-2
                  border-emerald-900
                  bg-white
                  p-6
                  outline-none
                  ring-emerald-300
                  ring-offset-1
                  placeholder:text-gray-300
                  focus:ring-2 " v-model="searchQuery" type="text"
        placeholder="Search a breach">
      <div class="grid grid-cols-4 gap-4">
        <div class="pb-100
                  flex
                  aspect-video
                  flex-col
                  rounded-2xl
                  bg-white
                  p-8
                  ring-emerald-900
                  drop-shadow-sm
                  hover:ring-2 " v-for="breach in breachList" :key="breach.id">
          <g-link :to="'/breach/' + breach.id">
            <h2 class="text-xl text-emerald-900"> {{ breach.company }} </h2>
          </g-link>
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
        affectedUsersMn
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'PlugTheBreach',
    meta: [
      {
        name: 'description',
        content: 'An experimental initiative by the Internet Freedom Foundation to track data breaches in India.',
      },
    ],
  },
  data: () => ({
    searchQuery: '',
  }),
  computed: {
    searchResults() {
      const query = this.searchQuery;
      if (this.searchQuery.length < 3) {
        return [];
      }
      return this.$search.search({ query: this.searchQuery, limit: 5 });
    },
    /**
     * Maps the GraphQL array of objects to a new array of objects with simplified property
     * access by removing the need to include 'node' in the property path.
     * For instance, instead of '{{ breach.node.company }}', you can use '{{ breach.company }}'.
     */
    mappedBreaches() {
      return this.$page.breaches.edges.map((edge) => ({ ...edge.node }));
    },
    breachList() {
      if (this.searchResults.length > 0) return this.searchResults;
      return this.mappedBreaches;
    },
  },
};

</script>
