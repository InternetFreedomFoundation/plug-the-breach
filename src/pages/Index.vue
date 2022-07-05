<template>
  <Layout>
    <div
      class="overflow-hidden flex justify-between flex-col-reverse md:flex-row px-10"
    >
      <div class="text-start md:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2
          class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
        >
          <span class="block text-teal-800">Tracking</span>
          <span class="block text-teal-800">Data breaches in India</span>
        </h2>
        <p class="text-xl mt-4 text-gray-400">
          Plug the Breach is a project by the Internet Freedom Foundation to
          track and analyse data breaches across India.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <g-link
              type="button"
              class="py-3 px-5 bg-teal-700 hover:bg-teal-800 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
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

    <div class="container mx-auto my-20 px-10">
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
            <!-- <a :href="edge.node.path"> -->
            <h2 class="text-2xl font-bold text-left text-teal-900 mb-2 h-2/5">
              {{ edge.node.title }}
            </h2>
            <!-- </a> -->
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

            <!-- <a :href="edge.node.path">
              <button class="">
                <p>Read More</p>
              </button>
            </a> -->
            <!-- <hr class="mx-8" /> -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Blog {
  posts: allPost (sortBy: "date_published", order: DESC, filter: { published: {eq: true }}){
    edges {
      node {
        id
        title
        description
        tags
        path
        date_published
        timeToRead
      }
    }
  }
}
</page-query>

<script>
import Social from "~/components/Social.vue";
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
  components: {
    Social,
  },
};
</script>
