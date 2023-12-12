<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }} here!</p>
    <p><router-link to="/posts">&lt; Back</router-link></p>
  </div>
</template>

<script setup>
</script>
