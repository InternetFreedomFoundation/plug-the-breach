<template>
  <Layout>
    <div class="container mx-auto px-4">
      <article class="prose
                      prose-zinc
                      -mb-24
                      mt-40
                      max-w-none
                      dark:prose-invert
                      prose-headings:font-normal
                      prose-headings:text-teal-400
                      prose-h1:uppercase
                      prose-h1:text-teal-100
                      prose-p:text-lg
                      prose-a:font-normal
                      prose-a:text-teal-400
                      prose-a:no-underline
                      prose-li:text-lg
                      prose-img:rounded-3xl">
        <h1>{{ $page.post.title }}</h1>
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
          content: '@internetfreedom',
        },
        {
          name: 'twitter:site',
          content: '@internetfreedom',
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
          content: this.$static.metadata.baseURL + this.$page.post.og_image,
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
