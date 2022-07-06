<template>
  <Layout>
    <div class="overflow-hidden relative">
      <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block">Tracking</span>
          <span class="block text-teal-800">Data breaches in India</span>
        </h2>
        <p
          class="text-xl mt-4 text-gray-400"
        >Plug the Breach is a project by the Internet Freedom Foundation to track and analyse data breaches across India.</p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <g-link
              type="button"
              class="py-4 px-6 bg-teal-700 hover:bg-teal-800 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              to="/tracker"
            >Open Tracker</g-link>
          </div>
        </div>
      </div>
      <div class="absolute h-full max-w-1/2 hidden lg:block right-0 top-0">
        <g-image src="~/assets/graphic1.png" width="400" />
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