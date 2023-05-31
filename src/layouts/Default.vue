<template>
  <div class="">
    <header class="container mx-auto flex flex-row items-center justify-between px-4 py-8">
      <div class="flex flex-row items-center gap-5 max-sm:gap-2">
        <g-link class="" to="/">
          <g-image class="h-12 w-48"
            src="~/assets/logos/PlugTheBreach Logo_Wordmark_Dark BG.svg" immediate="true"
          />
        </g-link>
        <div class="rounded-sm
                    border
                    border-white/10
                    bg-white/5
                    p-1
                    text-xs
                    text-white">
          BETA
        </div>
      </div>
      <div class="flex flex-row items-center justify-between gap-8" id="header-right">
        <g-link
          class="text-teal-400 transition duration-200 ease-in hover:text-teal-200 focus:text-white max-md:hidden"
          to="/blog/how-we-track">How We Track
        </g-link>
        <g-link class="inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-teal-400
                  px-5
                  py-3
                  text-zinc-950
                  shadow-lg
                  shadow-teal-700
                  transition
                  duration-200
                  ease-in
                  hover:bg-teal-200
                  hover:shadow-xl
                  hover:shadow-teal-700
                  focus:bg-teal-400
                  focus:shadow-lg
                  focus:shadow-teal-700
                  focus:outline-none
                  focus:outline-1
                  focus:outline-offset-0
                  focus:outline-white
                  max-sm:p-4" type="button" to="/breaches" tabindex="0"
                  v-if="isRouteNotBreaches">
          <span class="max-sm:hidden">Explore Breaches</span>
          <Icon class="" type="arrow-right" size="20" />
        </g-link>
      </div>
    </header>
    <main id="main">
      <slot />
    </main>
    <footer class="container mx-auto flex flex-col gap-16 px-4 pb-8 pt-28">
      <div class="flex flex-row items-center justify-between max-md:flex-col ">
        <a href="https://internetfreedom.in/" target="_blank">
          <g-image class="w-48" src="../assets/logos/IFF Logo_Dark BG.svg"
            alt="Internet Freedom Foundation Logo" />
        </a>
        <div class="flex flex-col items-end gap-4 max-md:mt-20 max-md:items-center">
          <div class="flex
                      flex-row
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-teal-300/10
                      bg-teal-300/5
                      p-2
                      font-light
                      text-teal-300">
            <Icon class="" type="info" size="20" />
            <p class="text-sm">
              All data on PlugTheBreach is publicly sourced.
            </p>
          </div>
          <DownloadDatasetButton />
        </div>
      </div>
      <div
        class="flex flex-row justify-between border-t border-zinc-800 fill-zinc-500 pt-8 text-gray-500 max-md:flex-col max-md:items-center max-md:gap-8">
        <div class="flex gap-8">
          <a class="transition duration-200 ease-in hover:fill-white hover:text-white"
            href="https://www.instagram.com/internetfreedom.in/" target="_blank" rel="noreferrer">
            <InstagramIcon class="" size="18"/>
          </a>
          <a class="transition duration-200 ease-in hover:fill-white hover:text-white"
            href="https://twitter.com/internetfreedom" target="_blank" rel="noreferrer">
            <TwitterIcon class="" size="20"/>
          </a>
          <a class="transition duration-200 ease-in hover:fill-white hover:text-white"
            href="https://t.me/IFFchats" target="_blank" rel="noreferrer">
            <TelegramIcon class="" size="20"/>
          </a>
          <a class="transition duration-200 ease-in hover:fill-white hover:text-white"
            href="https://mas.to/@internetfreedom" target="_blank" rel="noreferrer">
            <MastodonIcon class="" size="20"/>
          </a>
          <a class="transition duration-200 ease-in hover:fill-white hover:text-white"
            href="https://www.reddit.com/user/InternetFreedomIn/" target="_blank" rel="noreferrer">
            <RedditIcon class="" size="20"/>
          </a>
          <a class="transition duration-200 ease-in hover:fill-white hover:text-white"
            href="https://github.com/internetfreedomfoundation" target="_blank" rel="noreferrer">
            <GitHubIcon class="" size="20"/>
          </a>
        </div>
        <nav class="flex flex-row gap-8">
          <a class="transition duration-200 ease-in">Credits</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  InstagramIcon, TwitterIcon, TelegramIcon, RedditIcon, MastodonIcon, GitHubIcon,
} from 'vue-simple-icons';
import DownloadDatasetButton from '~/components/DownloadDatasetButton.vue';

export default {
  components: {
    DownloadDatasetButton,
    InstagramIcon,
    TwitterIcon,
    TelegramIcon,
    RedditIcon,
    MastodonIcon,
    GitHubIcon,
  },
  computed: {
    isRouteNotBreaches() {
      return this.$route.path !== '/breaches';
    },
  },
};
</script>
