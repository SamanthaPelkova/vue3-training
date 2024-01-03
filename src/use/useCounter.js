import { computed, onMounted, reactive, watch } from "vue"

export function useCounter() {
    const counterData = reactive({
        count: 0,
        title: 'My Counter'
    })

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
        counterData.count += amount
    }

    const decreaseCounter = (amount, e) => {
        counterData.count -= amount
    }

    onMounted(() => {
        console.log(`The app title is ${ appTitleRef.value.name }`)
    })

    return{
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter
    }

}