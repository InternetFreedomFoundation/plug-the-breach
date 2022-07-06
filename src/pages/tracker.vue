<template>
  <Layout>
    <!-- <h1 class="text-left underline text-4xl font-bold">Tracker Index</h1> -->
    <div class="leak-grid-container">
      <h1
        class="text-4xl font-bold text-teal-900 text-left tracker-title ml-5 md:ml-10"
      >
        All Leaks
      </h1>
      <div
        class="container mx-auto lg:grid lg:grid-flow-row lg:grid-cols-2 leak-grid"
      >
        <div
          class="flex flex-col mx-auto leak-card bg-white shadow-lg rounded-lg overflow-hidden mw-full mx-5 my-5 p-5 md:p-10"
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
        >
          <div class="leak-card-content mx-5 my-30">
            <div class="leak-card-title mb-4">
              <g-link :to="'/tracker/' + edge.node.id">
                <h2 class="leak-title font-bold text-3xl text-teal-900">
                  {{ edge.node.company }}
                </h2>
              </g-link>
            </div>
            <div class="lg:grid lg:grid-cols-2">
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/calender.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Breach Date</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/calender.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Containment Date</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/book_open.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Affected Accounts</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/users.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Affected Users</h3>
                </div>
              </div>
            </div>
            <div class="flex flex-col leak-prop-container">
              <div class="flex flex-row mt-5">
                <g-image
                  src="~/assets/icons/layers.svg"
                  width="20"
                  height="20"
                />
                <h3 class="leak-prop-title ml-1.5">Details Leaked</h3>
              </div>
              <div></div>
            </div>
            <div class="lg:grid lg:grid-cols-2 lg:grid-flow-row ">
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/disk.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Size [GB]</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/users.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Monetary Losses[INR]</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/briefcase.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Acknowledgement</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/info.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Notice</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/help_circle.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Grievance Redressal</h3>
                </div>
              </div>
              <div class="flex flex-col leak-prop-container">
                <div class="flex flex-row mt-5">
                  <g-image
                    src="~/assets/icons/external_link.svg"
                    width="20"
                    height="20"
                  />
                  <h3 class="leak-prop-title ml-1.5">Link</h3>
                </div>
              </div>
            </div>

            <div class="flex flex-col leak-prop-container">
              <div class="flex flex-row mt-5">
                <p>status: {{ edge.node.date }}</p>
              </div>
            </div>

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
