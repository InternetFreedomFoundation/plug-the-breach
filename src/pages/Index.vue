<template>
  <Layout>
    <div
      class="overflow-hidden flex justify-between flex-col-reverse md:flex-row px-4 sm:px-10"
    >
      <div class="text-start md:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2
          class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
        >
          <span class="block text-teal-800">Tracking data</span>
          <span class="block text-teal-800">breaches in India</span>
        </h2>
        <p class="text-xl mt-4 text-teal-700">
          Plug the Breach is an experimental initiative by Internet Freedom
          Foundation.
        </p>
        <div class="rounded-lg bg-emerald-100 py-3 px-3 mt-6">
          <p class="text-lg text-teal-800 font-bold">
            DISCLAIMER
          </p>
          <p class="texl-lg text-teal-700">
            All information on this website is publicly sourced.
          </p>
        </div>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-6 inline-flex rounded-md shadow">
            <g-link
              type="button"
              class="py-3 px-5 bg-teal-800 hover:bg-teal-900 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              to="/tracker"
              >Open Tracker</g-link
            >
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <g-image src="~/assets/graphic1.png" width="400" />
      </div>
    </div>

    <!-- <div class="container mx-auto my-20 px-5 sm:px-10">
      <h2 class="text-3xl font-bold text-left text-teal-900 mb-6">Articles</h2>
      <div
        class="lg:grid lg:grid-flow-row lg:grid-cols-2 sm:gap-12 lg:auto-rows-auto sm:px-14 h-full"
      >
        <div
          v-for="(edge, index) in $page.posts.edges"
          :key="edge.node.id"
          class="flex flex-col mt-5 bg-white shadow-md rounded-md overflow-hidden h-full"
        >
          <img src="../assets/article_placeh.png" />
          <div class="p-8 h-full flex flex-col justify-between">
            <h2 class="text-2xl font-bold text-left text-teal-900 mb-2 h-2/5">
              {{ edge.node.title }}
            </h2>
            <p class="mb-4">
              {{ edge.node.description }}
            </p>

            <div class="inline-flex w-36">
              <g-link
                type="button"
                class="py-2 px-4 bg-teal-700 hover:bg-teal-800 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded hidden sm:block"
                :to="edge.node.path"
                >Read More</g-link
              >
              <g-link
                type="button"
                class="text-teal-600 block sm:hidden underline hover:underline-offset-1"
                :to="edge.node.path"
                >Read More</g-link
              >
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container mx-auto my-20 px-5 sm:px-10">
      <h2 class="text-3xl font-bold text-left text-teal-900 mb-10">
        Recent Leaks
      </h2>
      <div
        class="grid grid-flow-col gap-4 overflow-y-scroll sm:overflow-x-scroll h-80 sm:overflow-y-hidden"
      >
        <div
          v-for="(edge, index) in $page.posts.edges"
          :key="edge.node.id"
          class="flex flex-col bg-white shadow-md rounded-lg h-72 min-w-max"
        >
          <div class="px-6 py-5 w-72 h-full flex flex-col justify-between">
            <div class="">
              <div class="mb-6">
                <g-link :to="'/tracker/' + edge.node.id">
                  <h2 class="uppercase font-bold text-2xl text-teal-900">
                    {{ edge.node.company }}
                  </h2>
                </g-link>
              </div>
              <div>
                <div class="flex flex-col leak-prop-container">
                  <div class="flex flex-row">
                    <g-image
                      src="~/assets/icons/calender.svg"
                      width="20"
                      height="20"
                    />
                    <h3 class="ml-1.5 text-teal-600 font-medium">
                      Breach Date
                    </h3>
                  </div>
                  <div class="flex flex-row">
                    <h3 class="ml-0.5 mt-2">——</h3>
                  </div>
                </div>
                <div class="flex flex-col leak-prop-container">
                  <div class="flex flex-row mt-2">
                    <g-image
                      src="~/assets/icons/calender.svg"
                      width="20"
                      height="20"
                    />
                    <h3 class="ml-1.5 text-teal-600 font-medium">
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
              <g-link
                type="button"
                class="py-3 px-5 bg-teal-900 hover:bg-teal-900 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm"
                :to="'/tracker/' + edge.node.id"
                >See More</g-link
              >
            </div>
          </div>
        </div>
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
    title: "Home",
    meta: [
      {
        name: "description",
        content: "A Project by Internet Freedom Foundation",
      },
    ],
  },
};
</script>
