<template>
    <div>
        this is home - {{ userStore.user }}
    </div>
</template>

<script setup>
    import { useUserStore } from '../store/user'

    const userStore = useUserStore()
</script>

<style lang="scss" scoped>

</style>