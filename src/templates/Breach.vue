<template>
  <Layout>
    <main class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="sm:text-left lg:text-left">
        <p
          class="py-4 text-4xl underline tracking-tight leading-10 font-extrabold text-emerald-900 sm:leading-none">
          {{ $page.breach.company }}</p>
        <p class="text-2xl font-bold text-emerald-900 opacity-75">Breach Size: {{
          $page.breach.affectedUsersMn }} Million Users</p>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <g-link
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-emerald-700 bg-emerald-100 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none focus:shadow-outline-emerald focus:border-emerald-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            to="/tracker">All Sites</g-link>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  breach(id: $id) {
    id
    company
    breachDate
    containmentDate
    affectedUsersMn
    details
    sizeGb
    acknowledgement
    notice
    grievanceRedressal
    statementMediaCoverage
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