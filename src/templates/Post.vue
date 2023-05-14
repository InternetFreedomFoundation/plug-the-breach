<template>
  <Layout>
    <div class="container mx-auto p-4">
      <article class="prose
                      prose-zinc
                      mt-40
                      max-w-none
                      dark:prose-invert
                      prose-headings:font-normal
                      prose-headings:text-teal-400
                      prose-h1:uppercase
                      prose-h1:text-teal-100
                      prose-a:font-normal
                      prose-a:text-teal-400
                      prose-a:no-underline
                      prose-img:rounded-3xl">
        <h1>{{ $page.post.title }}</h1>
        <div class="flex flex-row gap-4 max-sm:flex-col">
          <div class="flex
                      w-max
                      flex-row
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      font-light
                      text-white">
            <Icon class="text-teal-400" type="pen-tool" size="12" />
            {{ $page.post.author }}
          </div>
          <div class="flex
                      w-max
                      flex-row
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      font-light
                      text-white">
            <Icon class="text-teal-400" type="calendar" size="12" />
            {{ $page.post.date_published }}
          </div>
          <div class="flex
                      w-max
                      flex-row
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      font-light
                      text-white">
            <Icon class="text-teal-400" type="clock" size="12" />
            {{ $page.post.timeToRead }}
            Minutes
          </div>
        </div>
        <hr />
        <div v-html="$page.post.content"></div>
      </article>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'Post',
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description,
        },
        {
          name: 'twitter:description',
          content: this.$page.post.description,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: this.$page.post.title,
        },
        {
          name: 'twitter:creator',
          content: '@terabytetiger',
        },
        {
          name: 'twitter:site',
          content: '@terabytetiger',
        },
        {
          name: 'og:description',
          content: this.$page.post.description,
        },
        {
          name: 'og:title',
          content: this.$page.post.title,
        },
        {
          name: 'og:image',
          content: this.$static.metadata.baseURL + this.$page.post.og_image.src,
        },
      ],
      link: [
        {
          rel: 'canonical',
          content: this.$static.metadata.baseURL + this.$page.post.path,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title
    author
    path
    content
    date_published (format: "MMM do y")
    timeToRead
    description
    og_image
  }
}
</page-query>

<static-query>
query {
  metadata {
    baseURL
  }
}
</static-query>
