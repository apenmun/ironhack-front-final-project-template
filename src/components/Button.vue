<template>
  <button
    @click="change"
    class="flex justify-center items-center content-center self-center text-white bg-gray-600 rounded-md py-2 px-4"
    type="submit"
  >
    Change
  </button>
</template>
<script setup>

//const login = ref(true);
const emits = defineEmits(["changeEvent"]);

function change() {
  emits("changeEvent")
}
</script>

<style lang="scss" scoped></style>
