<template>
    <div>Goods</div>
</template>
<script lang="ts">
export default {
    name: 'GoodsIndex',
    setup() {
        console.log('Goods')
        const a = 1
        const b = 2
        const c = a + b
        const fun = () => {
            console.log(c)
        }
        fun()
    }
}
</script>
