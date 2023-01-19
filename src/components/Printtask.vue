<template>
    <form @submit.prevent="handleSubmit" class=" bg-gray-600 bg-opacity-29 py-8 px-6 rounded-md"
  style="width: 50%; margin: 0 auto" v-for="titletask in titletasks">
    <p class="my-2 bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"> {{ titletask.title }}</p> />
    <button class="flex items-center justify-between text-turquoise bg-emerald-100 rounded-md py-2 px-4" type="submit"> Create task</button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";

const user = useUserStore();
const taskStore = useTaskStore();
console.log(user.user)
const title = ref("");
const titletasks = ref([])

//const handleSubmit = async () => {
  //hacer una llamada a fetchUser y obtener el id del usuario
//const user = await userStore.fetchUser();
  // await taskStore.addPost(user.user.id, title.value)
//}
</script>

<style lang="scss" scoped>

</style>