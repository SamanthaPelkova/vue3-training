<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('hideModal')">Hide modal</button>
      <div>
        username is: {{ userData.username }}
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: 'No title specified'
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})


const emit = defineEmits(['hideModal'])



const handleButtonClick = () => {
  emit('update: hideModal', false)
}

const userData = inject('userData')

</script>



<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.modal h1, p{
  color: black;
}
</style>