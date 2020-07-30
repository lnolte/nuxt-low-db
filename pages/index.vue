<template>
  <div>
    <h1>Hello from nuxt</h1>
    <div
      v-for="post in posts"
      :key="post.id"
    >
      <h2>{{ post.title }}</h2>
      <p>{{ post.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get('posts')
    return { posts }
  },
}
</script>
