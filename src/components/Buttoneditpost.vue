<template>
    <button
      @click="change"
      class="flex justify-center items-center content-center self-center text-white bg-gray-600 rounded-md py-2 px-4"
      type="submit"
    >
      Edit
    </button>
  </template>
  <script setup>
  
  const emits = defineEmits(["changeEvent"]);
  
  function change() {
    emits("changeEvent")
  }
  </script>
  
  <style lang="scss" scoped></style>