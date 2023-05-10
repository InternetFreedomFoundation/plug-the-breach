<template>
  <Layout>
    <div class="">
      <div class="stroke-3
                  ring-offset
                  my-8
                  flex
                  w-full
                  justify-between
                  rounded-full
                  border-2
                  border-emerald-900
                  bg-white
                  p-1
                  pl-4
                  outline-none
                  placeholder:text-gray-300
                  " @click="$refs.searchInput.focus()">
        <input class="grow
                      bg-transparent
                      focus:outline-none"
        type="text" :value="searchQuery" @keydown.enter="updateSearchQuery($event.target.value)"
          placeholder="Search a breach" ref="searchInput">
        <button class="aspect-square
                      rounded-full
                      bg-emerald-900
                      p-4
                      text-white
                      hover:bg-emerald-800
                      focus:outline-none
                      focus:ring-2" @click="updateSearchQuery($refs.searchInput.value)">
          <VueFeather type="search" />
        </button>
      </div>
      <div class="my-8">
        <h4 v-if="searchQuery && searchResults.length > 0">Showing search results for {{ searchQuery }}</h4>
        <h4 v-else-if="searchQuery && searchResults.length == 0">Oops! We couldn't find anything for "{{ searchQuery }}". Showing all breaches.</h4>
      </div>
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
  created() {
    if (this.$route.query.search) { this.searchQuery = this.$route.query.search; }
  },
  computed: {
    /**
     * Maps the GraphQL array of objects to a new array of objects with simplified property
     * access by removing the need to include 'node' in the property path.
     * For instance, instead of '{{ breach.node.company }}', you can use '{{ breach.company }}'.
     */
    mappedBreaches() {
      return this.$page.breaches.edges.map((edge) => ({ ...edge.node }));
    },
    searchResults() {
      if (this.searchQuery.length < 3) return [];
      return this.$search.search({ query: this.searchQuery, limit: 5 });
    },
    breachList() {
      if (this.searchResults.length > 0) return this.searchResults;
      return this.mappedBreaches;
    },
  },
  methods: {
    updateSearchQuery(query) {
      this.searchQuery = query;
      if (this.$route.query.search !== this.searchQuery) this.updateURL();
    },
    updateURL() {
      this.$router.push({
        path: '/breaches',
        query: {
          search: this.searchQuery,
        },
      });
    },
  },
};

</script>
