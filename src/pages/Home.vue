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

  

  <Printtask></Printtask>

  <Footer></Footer>
</template>

<script setup>
import Header from "../components/Header.vue";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";
import { ref } from "vue";
import Printtask from "../components/Printtask.vue";
import Footer from "../components/Footer.vue";

//import { supabase } from '../supabase';
//import { useRouter } from 'vue-router';


const user = useUserStore();
const taskStore = useTaskStore();
console.log(user.user)
const title = ref("");

const handleSubmit = async () => {
  //hacer una llamada a fetchUser y obtener el id del usuario
//const user = await userStore.fetchUser();
   await taskStore.addPost(user.user.id, title.value)
   console.log('TASK STORE DESPUES DEL POST',taskStore.tasks)
   console.log(user)
}


</script>

<style lang="scss" scoped></style>
