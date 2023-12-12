<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li>
        <router-link to="/postDetail/id1">Post 1</router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link to="/postDetail/id2">Post 2</router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link to="/postDetail/id3">Post 3</router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link to="/postDetail/id4">Post 4</router-link>
      </li>
    </ul>
    <textarea v-autofocus/>
  </div>
</template>

<script setup>
import { vAutofocus } from "@/Directives/vAutofocus.js"
</script>

<style scoped>
ul{
  margin-bottom: 30px;
}
</style>