<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal">
      <template #title >My new title</template>
      <p>fodjifj ofioe o oijgiogjoiejf iojej oife jooi ojgj goj</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Modal from "@/components/Modal.vue"

const showModal = ref(false)


</script>
