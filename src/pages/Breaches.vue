<template>
  <Layout>
    <div class="container mx-auto px-4">
      <SearchBar />
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
import SearchBar from '~/components/SearchBar.vue';
import { formatBreachList, mapEdgesToNodes } from '~/utils/utils.js';

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
  components: {
    SearchBar,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  mounted() {
    this.searchQuery = this.$route.query.search;
  },
  updated() {
    this.searchQuery = this.$route.query.search;
  },
  computed: {
    searchList() {
      if (!this.searchQuery) return [];
      return this.$search.search({ query: this.$route.query.search, limit: 5 });
    },
    breachList() {
      if (this.searchList.length > 0) return formatBreachList(mapEdgesToNodes(this.searchList));
      return formatBreachList(mapEdgesToNodes(this.$page.breaches.edges));
    },
  },
};

</script>
