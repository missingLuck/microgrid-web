<template>
    <div class="name">园区111监控</div>
    <div class="value w-48 line-clamp-1 testName">{{ a + b }}</div>
    <el-button>园区监控</el-button>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
export default {
    name: 'App',
    setup() {
        const complete = ref(false)
        onMounted(() => {
            complete.value = true
        })
        const a = 1
        const b = 2
        console.log(a, b)
        const arr = [1, 2, 3]
        arr.forEach((item) => {
            console.log(item)
        })
        return {a, b, complete   }
    }
}
</script>
<style lang="less">
.name {
    @apply bg-success;
    padding-inline: 12px;
}
.testName{
    margin-top: 4px;
}
</style>
