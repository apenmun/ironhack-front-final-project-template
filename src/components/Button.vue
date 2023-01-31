<template>
  <button
    @click="change"
    class="flex justify-center items-center content-center my-2 m-auto text-black bg-teal-300 rounded-md py-2 px-4"
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
