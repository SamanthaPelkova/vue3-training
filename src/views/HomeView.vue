<template>
  <div class="home">

    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(1, $event)" class="btn">-</button>
      <button @click="decreaseCounter(2, $event)" class="btn">--</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2, $event)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useCounter } from "@/use/useCounter.js"
import { vAutofocus } from "@/Directives/vAutofocus.js"

const appTitle = 'My Ok Counter App'

const appTitleRef = ref(null)


const { increaseCounter, decreaseCounter, oddOrEven, counterData } = useCounter()

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
