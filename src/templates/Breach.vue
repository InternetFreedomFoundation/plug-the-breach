<template>
  <Layout>
    <div class="container mx-auto px-4">
      <div class="mt-20
                  flex
                  flex-col
                  rounded-3xl
                  bg-gradient-to-br
                  from-transparent
                  to-white/5
                  shadow-xl
                  shadow-black/25
                  outline-none
                  outline-1
                  outline-offset-0
                  outline-zinc-700
                  backdrop-blur-xl
                  transition
                  duration-200
                  ease-in">
        <div class="flex flex-col gap-8 p-6">
          <div class="h-20 border-b border-zinc-700 ">
            <span class="line-clamp-2 text-2xl text-teal-400">
              {{ breach.company }}
            </span>
          </div>
          <div class="flex min-h-16 flex-col gap-4">
            <div class="inline-flex items-center gap-2">
              <Icon class="text-teal-400" type="calendar" size="12" />
              <span class="text-sm font-medium uppercase text-zinc-500">
                Breach Date
              </span>
            </div>
            <span class="text-xl uppercase text-white">
              {{ breach.breachDate }}
            </span>
          </div>
          <div class="flex min-h-16 flex-col gap-4">
            <div class="inline-flex flex-row items-center gap-2">
              <Icon class="text-teal-400" type="shield-off" size="12" />
              <span class="text-sm font-medium uppercase text-zinc-500">
                Affected Users
              </span>
            </div>
            <span class="text-xl uppercase text-white">
              {{ breach.affectedUsersMn }}
            </span>
          </div>
          <div class="flex min-h-16 flex-col gap-4">
            <div class="inline-flex flex-row items-center gap-2">
              <Icon class="text-teal-400" type="list" size="12" />
              <span class="text-sm font-medium uppercase text-zinc-500">
                Details
              </span>
            </div>
            <span class="text-xl text-white" v-html="breach.details" />
          </div>
          <div class="flex min-h-16 flex-col gap-4">
            <div class="inline-flex flex-row items-center gap-2">
              <Icon class="text-teal-400" type="activity" size="12" />
              <span class="text-sm font-medium uppercase text-zinc-500">
                Acknowledgement
              </span>
            </div>
            <span class="text-xl uppercase text-white">
              {{ breach.acknowledgement }}
            </span>
          </div>
          <div class="flex flex-col gap-4">
            <div class="inline-flex flex-row items-center gap-2">
              <Icon class="text-teal-400" type="tv" size="12" />
              <span class="upp text-sm font-medium uppercase text-zinc-500">
                Media Coverage
              </span>
            </div>
            <a class="text-xl text-white underline"
              :href="$page.breach.mediaCoverage" target="_blank" rel="noreferrer">
              {{ breach.mediaCoverage }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  breach(id: $id) {
    id
    company
    breachDate
    affectedUsersMn
    details
    acknowledgement
    mediaCoverage
  }
}
</page-query>

<script>
import { formatBreach } from '~/utils/utils.js';

export default {
  metaInfo() {
    return {
      title: `${this.$page.breach.company} Breach`,
      meta: [
        {
          name: 'description',
          content: 'An experimental crowdsourced tracker of data breaches by the Internet Freedom Foundation.',
        },
      ],
    };
  },
  computed: {
    breach() {
      return formatBreach(this.$page.breach);
    },
  },
};
</script>
