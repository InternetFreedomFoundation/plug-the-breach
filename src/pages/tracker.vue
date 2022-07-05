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