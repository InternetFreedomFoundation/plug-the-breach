<template>
  <Layout>
    <div
      class="flex flex-col-reverse justify-between overflow-hidden px-4 sm:px-10 md:flex-row">
      <div class="z-20 px-4 py-12 text-start sm:px-6 md:w-1/2 lg:px-8 lg:py-16">
        <h2
          class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block text-teal-800">Tracking data</span>
          <span class="block text-teal-800">breaches in India</span>
        </h2>
        <p class="mt-4 text-xl text-teal-700">
          Plug the Breach is an experimental initiative by Internet Freedom
          Foundation.
        </p>
        <div class="mt-6 rounded-lg bg-emerald-100 p-3">
          <p class="text-lg font-bold text-teal-800">
            DISCLAIMER
          </p>
          <p class="texl-lg text-teal-700">
            All information on this website is publicly sourced.
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <g-image src="~/assets/graphic1.png" width="400" />
      </div>
    </div>

    <!-- <div class="container mx-auto my-20 px-5 sm:px-10">
      <h2 class="mb-6 text-left text-3xl font-bold text-teal-900">Articles</h2>
      <div
        class="h-full
              sm:gap-12
              sm:px-14
              lg:grid
              lg:grid-flow-row
              lg:auto-rows-auto
              lg:grid-cols-2"
      >
        <div
          v-for="(edge, index) in $page.posts.edges"
          :key="edge.node.id"
          class="mt-5 flex h-full flex-col overflow-hidden rounded-md bg-white shadow-md"
        >
          <img src="../assets/article_placeh.png" />
          <div class="flex h-full flex-col justify-between p-8">
            <h2 class="mb-2 h-2/5 text-left text-2xl font-bold text-teal-900">
              {{ edge.node.title }}
            </h2>
            <p class="mb-4">
              {{ edge.node.description }}
            </p>

            <div class="inline-flex w-36">
              <g-link
                type="button"
                class="hidden
                      w-full
                      rounded
                      bg-teal-700
                      px-4
                      py-2
                      text-center
                      text-base
                      font-semibold
                      text-white
                      shadow-md
                      transition
                      duration-200
                      ease-in
                      hover:bg-teal-800
                      focus:outline-none
                      focus:ring-2
                      focus:ring-teal-500
                      focus:ring-offset-2
                      focus:ring-offset-teal-200
                      sm:block"
                :to="edge.node.path"
                >Read More</g-link
              >
              <g-link
                type="button"
                class="block
                      text-teal-600
                      underline
                      hover:underline-offset-1
                      sm:hidden"
                :to="edge.node.path"
                >Read More</g-link
              >
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container mx-auto my-20 px-5 sm:px-10">
      <h2 class="mb-10 text-left text-3xl font-bold text-teal-900">
        Recent Leaks
      </h2>
      <div class="grid
              h-80
              grid-flow-col
              gap-4
              overflow-y-scroll
              sm:overflow-y-hidden
              sm:overflow-x-scroll">
        <div v-for="(edge, index) in $page.breaches.edges" :key="edge.node.id"
          class="flex h-72 min-w-max flex-col rounded-lg bg-white shadow-md">
          <div class="flex h-full w-72 flex-col justify-between px-6 py-5">
            <div class="">
              <div class="mb-6">
                <g-link :to="'/tracker/' + edge.node.id">
                  <h2 class="text-2xl font-bold uppercase text-teal-900">
                    {{ edge.node.company }}
                  </h2>
                </g-link>
              </div>
              <div>
                <div class="leak-prop-container flex flex-col">
                  <div class="flex flex-row">
                    <g-image src="~/assets/icons/calender.svg" width="20"
                      height="20" />
                    <h3 class="ml-1.5 font-medium text-teal-600">
      <SearchBar />
                      Breach Date
                    </h3>
                  </div>
                  <div class="flex flex-row">
                    <h3 class="ml-0.5 mt-2">——</h3>
                  </div>
                </div>
                <div class="leak-prop-container flex flex-col">
                  <div class="mt-2 flex flex-row">
                    <g-image src="~/assets/icons/calender.svg" width="20"
                      height="20" />
                    <h3 class="ml-1.5 font-medium text-teal-600">
                      Containment Date
                    </h3>
                  </div>
                  <div class="flex flex-row">
                    <h3 class="ml-0.5 mt-2">——</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-2 inline-flex rounded-md shadow">
              <g-link type="button" class="w-full
                      rounded-sm
                      bg-teal-900
                      px-5
                      py-3
                      text-center
                      text-base
                      font-semibold
                      text-white
                      shadow-md
                      transition
                      duration-200
                      ease-in
                      hover:bg-teal-900
                      focus:outline-none
                      focus:ring-2
                      focus:ring-teal-500
                      focus:ring-offset-2
                      focus:ring-offset-teal-200"
                :to="'/breach/' + edge.node.id">See More</g-link>
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
import SearchBar from '~/components/SearchBar.vue';
import { formatBreachList, mapEdgesToNodes } from '~/utils/utils.js';

export default {
  metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content: 'A Project by Internet Freedom Foundation',
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
