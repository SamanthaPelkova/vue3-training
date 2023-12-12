<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <div v-if="showModal" class="modal">
      <h1>This is a modal</h1>
      <p>lojfoejf oejfojfejij ioejgjoejojf ej ejfj loremefo fjiej ioej ioef</p>
      <button @click="showModal = false">Hide modal</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const showModal = ref(false)


</script>

<style>
.modal {
  background: beige;
  padding: 10px;
}
</style>