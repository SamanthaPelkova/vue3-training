<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('hideModal')">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'No title specified'
  }
})


const emit = defineEmits(['hideModal'])



const handleButtonClick = () => {
  emit('hideModal')
}

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