<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/postDetail/${ post.id }`">{{ post.title }}</router-link>
      </li>
    </ul>
    <textarea v-autofocus/>

    <div>
      <button
          @click="increaseCounter(1)"
          class="counter-button"
          :class="{ 'yellow' : oddOrEven === 'odd'}"
      >
        {{ counterData.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useCounter } from "@/use/useCounter.js"
import { vAutofocus } from "@/Directives/vAutofocus.js"

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  },
  {
    id: 'id4',
    title: 'Post 4'
  }
])

const { counterData, increaseCounter, oddOrEven } = useCounter()

</script>

<style scoped>
ul{
  margin-bottom: 30px;
}
.counter-button{
  font-size: 60px;
  width: 100%;
  background-color: pink;
}
.counter-button.yellow{
  background-color: yellow;
}
</style>