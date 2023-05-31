<template>
  <Layout>
    <div class="container mx-auto px-4">
      <SearchBar />
      <div class="my-8">
        <h4 class="text-sm text-zinc-500">
          <span v-if="!searchQuery && $page.breaches.edges.length">
            Showing all <span class="font-bold text-zinc-400">{{
              $page.breaches.edges.length }}</span>
            breaches.
          </span>
          <span v-else-if="searchQuery && searchList.length > 0">
            Showing <span class="font-bold text-zinc-400">{{ searchList.length }}
            </span> breach
            results for <span class="font-bold text-zinc-400">"{{ searchQuery
            }}"</span>.
          </span>
          <span v-else-if="searchQuery && searchList.length === 0">
            No results found for <span class="font-bold text-zinc-400">"{{
              searchQuery }}"</span>. Showing all <span
              class="font-bold text-zinc-400">{{ $page.breaches.edges.length
              }}</span>
            breaches.
          </span>
          <span v-else>
            Looks like our database is currently unreachable. This is serious
            breach of your love and trust. We are working to fix it!
          </span>
        </h4>
      </div>
      <div class="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        <g-link class="flex
                      flex-col
                      rounded-3xl
                      bg-gradient-to-br
                      from-transparent
                      to-white/5
                      shadow-xl
                      shadow-black/25
                      outline-none
                      outline-1
                      outline-offset-0
                      outline-zinc-700
                      backdrop-blur-xl
                      transition
                      duration-200
                      ease-in
                      hover:from-white/5
                      hover:to-white/10
                      hover:shadow-3xl
                      hover:outline-2
                      hover:outline-zinc-600
                      focus:from-transparent
                      focus:to-white/5
                      focus:shadow-black/50
                      focus:outline-2
                      focus:outline-white
                      active:from-white/5
                      active:to-white/10
                      active:shadow-black/50
                      active:outline-2
                      active:outline-white" v-for="breach in breachList"
          :key="breach.id" tabindex="0" :to="'/breach/' + breach.id">
          <div class="flex flex-col gap-8 p-6">
            <div class="h-20 border-b border-zinc-700 ">
              <span class="line-clamp-2 text-2xl text-teal-400">
                {{ breach.company }}
              </span>
            </div>
            <div class="flex min-h-16 flex-col gap-4">
              <div class="inline-flex items-center gap-2">
                <Icon class="text-teal-400" type="calendar" size="12" />
                <span class="text-sm font-medium uppercase text-zinc-500">
                  Breach Date
                </span>
              </div>
              <span class="text-xl uppercase text-white">{{ breach.breachDate
              }}</span>
            </div>
            <div class="flex min-h-16 flex-col gap-4">
              <div class="inline-flex flex-row items-center gap-2">
                <Icon class="text-teal-400" type="shield-off" size="12" />
                <span class="text-sm font-medium uppercase text-zinc-500">
                  Affected Users
                </span>
              </div>
              <span class="text-xl uppercase text-white">
                {{ breach.affectedUsersMn }}
              </span>
            </div>
          </div>
        </g-link>
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
    title: 'Breaches',
    meta: [
      {
        name: 'description',
        content: 'An experimental crowdsourced tracker of data breaches by the Internet Freedom Foundation.',
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
