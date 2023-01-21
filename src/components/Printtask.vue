<template>
  <form
    class="bg-emerald-100 py-8 px-6 rounded-md my-5"
    style="width: 50%; margin: 2% auto"
    v-for="titletask in taskStore.tasks"
  >
    <p
      class="my-2 bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
    >
      {{ titletask.title }}
    </p>

    <button @click="handleClick"
      class="flex items-center justify-between text-white bg-gray-600 rounded-md py-2 px-4"
      type="submit"
    >
      Delete
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";


const user = useUserStore();
const taskStore = useTaskStore();
console.log(user.user);

//console.log(taskStore.tasks)

// const handleClick = async () => {
//   await taskStore.deletePost(user.user.id, title.value)
//   console.log ('DELETE POST', taskStore.tasks)
// }
</script>

<style lang="scss" scoped></style>
