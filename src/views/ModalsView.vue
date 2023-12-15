<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals?
        <input v-model="showDarkModals" type="checkbox"/>
      </label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component
    v-model="showModal"
    :is="Modal"
    :userData="userData"
    @hide-modal="showModal = false"
    title="My modal title (via prop)"
    >
      <p>fodjifj ofioe o oijgiogjoiejf iojej oife jooi ojgj goj</p>
    </component>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Modal from "@/components/Modal.vue"

const showDarkModals = ref(false)
const showModal = ref(false)

const props = defineProps({ userData: {type: Object} })


</script>
