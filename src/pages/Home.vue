<template>
  <Header></Header>

  <p
    class="my-3 grid place-content-center underline decoration-red-400 text-white bg-teal-300 rounded-md py-2 px-4"
  >
    Hello {{ user.user?.email }} !
  </p>
  <form @submit.prevent="handleSubmit" class=" bg-gray-600 bg-opacity-29 py-8 px-6 rounded-md"
  style="width: 50%; margin: 0 auto">
    <input class="my-2 bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700" type="text" placeholder="Title" v-model="title" />
    <button class="flex items-center justify-between text-turquoise bg-emerald-100 rounded-md py-2 px-4" type="submit">Create task</button>
  </form>
  this is home
</template>

<script setup>
import Header from "../components/Header.vue";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";
import { ref } from "vue";

//import { useRouter } from 'vue-router';
//import { supabase } from '../supabase';

const user = useUserStore();
const taskStore = useTaskStore();

taskStore.fetchTasks();

const title = ref("");

const handleSubmit = () => {
    console.log('formulario')
}

//119. Agregar Documentos 5:55
</script>

<style lang="scss" scoped></style>
