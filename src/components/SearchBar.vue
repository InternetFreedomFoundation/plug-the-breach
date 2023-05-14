<template>
  <form class="relative" name="search" @submit.prevent="search">
    <input class="stroke-3
                  ring-offset
                  z-10
                  my-8
                  flex
                  w-full
                  grow
                  justify-between
                  rounded-full
                  bg-zinc-950/80
                  p-6
                  text-white
                  caret-teal-400
                  outline
                  outline-2
                  outline-teal-400
                  backdrop-blur-md
                  transition
                  duration-200
                  ease-in
                  placeholder:text-zinc-600
                  hover:outline-teal-200
                  focus:outline-none
                  focus:outline-offset-0
                  focus:outline-white
                  max-sm:my-8" placeholder="Search a breach"
      type="search" v-model="inputValue">
    <button class="absolute
                  right-2
                  top-2
                  inline-flex
                  aspect-square
                  items-center
                  rounded-full
                  bg-teal-400
                  p-4
                  text-zinc-950
                  shadow-md
                  shadow-teal-700
                  transition
                  duration-200
                  ease-in
                  hover:bg-teal-200
                  hover:shadow-xl
                  hover:shadow-teal-700
                  focus:bg-teal-400
                  focus:shadow-teal-700
                  focus:outline-none
                  focus:outline-2
                  focus:outline-offset-0
                  focus:outline-white" type="submit">
      <Icon type="search" />
    </button>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      inputValue: '',
      searchQuery: '',
    };
  },
  mounted() {
    if (this.$route.query.search) {
      this.inputValue = this.$route.query.search;
      this.searchQuery = this.$route.query.search;
    }
  },
  methods: {
    search() {
      if ((this.searchQuery === this.inputValue)
        || (this.$route.query.search === this.inputValue)) return;

      this.searchQuery = this.inputValue;

      if (this.searchQuery === '') {
        this.$router.push({
          path: '/breaches',
        });
        return;
      }

      this.$router.push({
        path: '/breaches',
        query: {
          search: this.searchQuery,
        },
      });
    },
  },
};
</script>
