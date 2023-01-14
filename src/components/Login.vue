<template>
  <form @submit.prevent="handleSubmit"
    class="bg-gray-600 bg-opacity-29 py-8 px-6 rounded-md"
    style="width: 50%; margin: 0 auto"
  >
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input
        class="bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
        id="EmailLogin"
        type="text"
        placeholder="example@yourmail.com"
        v-model="email"
      />
    </div>
    <div class="mb-4 py-4">
      <label class="block text-white text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
        id="passwordLogin"
        type="password"
        placeholder="********"
        v-model="password"
      />
    </div>
    <div class="flex flex-col items-center justify-between">
      <button
        class="text-turquoise bg-emerald-100 rounded-md py-2 px-4"
        type="submit"
      >
        Log in
      </button>
    </div>
  </form>
  <p>{{ mensaje }}</p>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const mensaje = ref('')

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return alert("fill the gaps");
  }
  
  if (password.value.length < 6) {
    return alert("Your password must be at least 6 characters long");
  }
  const res = await userStore.logIn(email.value, password.value);
  if(res.status === 400) {
    console.log(res.error)
    mensaje.value = res.error
  } else {
    router.push('/home')
  }
};
</script>

<style lang="scss" scoped></style>
