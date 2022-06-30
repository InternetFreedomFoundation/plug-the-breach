<template>
  <Layout>
    <div class="content container mx-auto content-container">
      <div class="left-content">
        <h1 class="content-header font-bold text-5xl">
          Tracking data
        </h1>
        <h1 class="content-header font-bold text-5xl">
          breaches in India
        </h1>
        <p class="content-subh font-medium text-2xl">
          Plug the Breach is a project by the Internet Freedom Foundation to
          track and analyse data breaches across India.
        </p>
        <button class="open-tracker-btn" style="margin-top: 24px">
          <g-link to="/tracker">Open Tracker</g-link>
        </button>
      </div>
      <div class="content-graphic">
        <g-image src="~/assets/graphic1.png" width="400" />
      </div>
    </div>

    <div class="container mx-auto articles-container">
      <h2 class="text-2xl text-left articles-header">Articles</h2>
      <div
        class="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-8 lg:auto-rows-auto"
      >
        <div
          v-for="(edge, index) in $page.posts.edges"
          :key="edge.node.id"
          class="flex flex-col article-card"
        >
          <img src="../assets/article_placeh.png" />
          <div class="article-card-info">
            <!-- <a :href="edge.node.path"> -->
            <h2 class="article-card-title">
              {{ edge.node.title }}
            </h2>
            <!-- </a> -->
            <p class="lg:flex-grow lg:justify-self-start article-card-desc">
              {{ edge.node.description }}
            </p>
            <a :href="edge.node.path">
              <button class="read-more-btn">
                <p>Read More</p>
              </button>
            </a>
            <!-- <hr class="mx-8" /> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <h1 class="text-4xl bold underline pb-4">Hello, world!</h1>

    <p class="text-2xl">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <hr class="mx-8 my-4" /> -->
    <h2 class="text-2xl text-center">Find us online:</h2>
    <Social />
    <hr class="mx-8 my-4" />
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

<style>
.content-container {
  padding-top: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left-content {
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 100%;
}

.content-header {
  font-family: Space Grotesk;
  /* font-size: 48px; */
  /* font-weight: 700; */
  /* line-height: 60px; */
  /* letter-spacing: 0em; */
  text-align: left;
  color: #033a2d;
}

.content-subh {
  font-weight: 500;
  color: #236858;
  margin-top: 24px;
}

.articles-container {
  margin: 80px 0 80px 0;
}

.articles-header {
  font-weight: 700;
  font-size: 28px;
  color: #033a2d;
  margin: 0 0 30px 10px;
}

.article-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  max-width: 90%;
}
.article-card-info {
  background: #ffffff;
  padding: 35px;
}

.article-card-title {
  font-weight: 700;
  font-size: 28px;
  color: #033a2d;
  max-height: 40%;
}

.article-card-desc {
  font-weight: 500;
  font-size: 20px;
  color: #236858;
  background: #ffffff;
  margin-top: 20px;
}

.read-more-btn {
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  background: #236858;
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
}
</style>
