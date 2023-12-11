<template>
  <div class="home">

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(1, $event)" class="btn">-</button>
      <button @click="decreaseCounter(2, $event)" class="btn">--</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2, $event)" class="btn">++</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text">
    </div>
  </div>
</template>

<script setup>
import {computed, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, reactive, ref, watch} from "vue";

  const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })

  const count = ref()
  watch(() => counterData.count, (newCount, oldCount) => {
    if (newCount === 20){
      alert('Way to go! You made it to 20!!')
    }
  })

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return 'even'
    return 'odd'
  })

  const increaseCounter = (amount, e) => {
    console.log(e)
    counterData.count = counterData.count + amount
  }

  const decreaseCounter = (amount, e) => {
    console.log(e)
    counterData.count = counterData.count - amount
  }

  onBeforeMount(() => {
    console.log('onBeforeMount')
  })
  onMounted(() => {
    console.log('onMounted')
  })
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
  })
  onUnmounted(() => {
    console.log('onUnmounted')
  })

</script>

<style>
.home{
  text-align: center;
  padding: 20px
}
.btn, .counter{
  font-size: 40px;
  margin: 10px;
}
.edit{
  margin-top: 60px;
}
</style>
