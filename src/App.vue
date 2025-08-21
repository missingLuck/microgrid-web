<template>
    <div  id="app" class="app"  v-loading="!complete">
        <router-view ></router-view>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const complete = ref(false)
onMounted(() => {
    complete.value = true
})
const a = '1'
const b = '2'
console.log(a, b)

</script>

<style scoped>
.app{
    line-height: 1.15;
}
</style>


