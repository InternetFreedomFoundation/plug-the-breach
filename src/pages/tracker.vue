<template>
  <Layout>
    <!-- <h1 class="text-left underline text-4xl font-bold">Tracker Index</h1> -->
    <div class="leak-grid-container">
      <h1 class="text-4xl text-left tracker-title">All Leaks</h1>
      <div
        class="container mx-auto lg:grid lg:grid-flow-row lg:grid-cols-2 leak-grid"
      >
        <div
          class="flex flex-col mx-auto leak-card"
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
        >
          <div class="leak-card-content">
            <div class="leak-card-title">
              <g-link :to="'/tracker/' + edge.node.id">
                <h2 class="leak-title font-bold text-3xl">
                  {{ edge.node.company }}
                </h2>
              </g-link>
            </div>
            <div class="lg:grid lg:grid-cols-2">
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/calender.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Breach Date</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/calender.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Containment Date</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/book_open.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Affected Accounts</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/users.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Affected Users</h3>
                </div>
              </div>
            </div>
            <div class="flex flex-col leak-prop-container">
              <div class="flex flex-row">
                <g-image
                  src="~/assets/icons/layers.svg"
                  width="20"
                  height="20"
                />
                <h3 class="leak-prop-title">Details Leaked</h3>
              </div>
              <div></div>
            </div>
            <div class="lg:grid lg:grid-cols-2 lg:grid-flow-row ">
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/disk.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Size [GB]</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/users.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Monetary Losses[INR]</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/briefcase.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Acknowledgement</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/info.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Notice</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/help_circle.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Grievance Redressal</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row">
                  <g-image
                    src="~/assets/icons/external_link.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title">Link</h3>
                </div>
              </div>
            </div>

            <p>status: {{ edge.node.date }}</p>
            <!-- <hr /> -->
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
    title: "Breach tracker",
    meta: [
      {
        name: "description",
        content: "List of historical breaches",
      },
    ],
  },
};
</script>

<style>
.leak-grid-container {
  padding: 60px 0 60px 0;
}
.tracker-title {
  font-weight: 700;
  font-size: 28px;
  color: #033a2d;
  margin-bottom: 20px;
}
.leak-title {
  color: #033a2d;
}
.leak-card {
  max-width: 95%;
  margin: 10px 0 10px 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #ffffff;
}
.leak-card-content {
  margin: 30px 40px 30px 40px;
}
.leak-card-title {
  margin-bottom: 10px;
}
.leak-prop-title {
  color: #4b8e85;
  font-weight: 700;
  font-size: 18px;
  margin-left: 10px;
}
.leak-prop-container {
  margin-top: 20px;
}
</style>
