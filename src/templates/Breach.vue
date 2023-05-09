<template>
  <Layout>
    <main class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="sm:text-left lg:text-left">
        <p
          class="py-4
                text-4xl
                font-extrabold
                leading-10
                tracking-tight
                text-emerald-900
                underline
                sm:leading-none">
          {{ $page.breach.company }}
        </p>
        <p class="text-2xl font-bold text-emerald-900 opacity-75">
          Breach Size: {{ $page.breach.affectedUsersMn }} Million Users
        </p>
        <div class="mt-3 sm:ml-3 sm:mt-0">
          <g-link
            class="focus:shadow-outline-emerald
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-transparent
                  bg-emerald-100
                  px-8
                  py-3
                  text-base
                  font-medium
                  leading-6
                  text-emerald-700
                  transition
                  duration-150
                  ease-in-out
                  hover:bg-emerald-50
                  hover:text-emerald-600
                  focus:border-emerald-300
                  focus:outline-none
                  md:px-10
                  md:py-4
                  md:text-lg"
            to="/tracker">
            All Sites
          </g-link>
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
    noticeStatement
    grievanceRedressal
    mediaCoverage
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Breach tracker',
    meta: [
      {
        name: 'description',
        content: 'List of historical breaches',
      },
    ],
  },
};
</script>
