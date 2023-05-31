<template>
  <Layout>
    <div class="container mx-auto px-4 py-52 max-lg:pb-0 max-lg:pt-8 max-sm:pt-16">
      <div class="flex w-max flex-col justify-between py-4 max-md:py-0">
        <g-image class="max-md
                        absolute
                        right-48
                        top-48
                        -z-10
                        w-1/4
                        max-lg:relative
                        max-lg:right-12
                        max-lg:top-0
                        max-lg:mx-auto
                        max-lg:mb-20
                        max-lg:w-1/3
                        max-sm:right-4
                        max-sm:w-1/2"
          src="../assets/images/morphis-personal-data-protection-1020x1236.png"
          alt="Image with several motifs of personal data protection" />
        <h1
          class="mb-4 w-max text-5xl uppercase tracking-tight text-teal-100 max-md:text-4xl max-sm:text-2xl">
          Stay on top of the breaches
        </h1>
        <p class="w-max text-lg text-zinc-500 max-sm:text-sm">
          An experimental initiative by the
          <span class="sm:hidden">IFF</span>
          <span class="max-sm:hidden">Internet Freedom Foundation</span>.
        </p>
      </div>
      <SearchBar />
      <div id="recent-searches" class="mt-24 flex flex-col gap-10">
        <h2 class="text-xl text-white"> Recent Breaches </h2>
        <div class="grid
                    grid-cols-3
                    gap-4
                    max-md:grid-cols-2
                    max-sm:grid-cols-1
                    ">
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
    </div>
  </Layout>
</template>

<page-query>
query Breaches{
 breaches: allBreach(sortBy: "breachDate", order: ASC, limit: 3){
    edges {
      node {
        id
        company
        breachDate
        affectedAccountsMn
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
    title: 'An experimental crowdsourced tracker of data breaches by the Internet Freedom Foundation.',
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
  computed: {
    breachList() {
      return formatBreachList(mapEdgesToNodes(this.$page.breaches.edges));
    },
  },
};
</script>
