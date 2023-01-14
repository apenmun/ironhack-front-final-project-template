<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-emerald-100 py-8 px-6 rounded-md"
    style="width: 50%; margin: 0 auto"
  >
    <div class="mb-4">
      <label class="block text-slate-600 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input
        class="bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
        id="EmailSignup"
        type="text"
        placeholder="example@yourmail.com"
        v-model.trim="email"
      />
    </div>
    <div class="mb-4">
      <label class="block text-slate-600 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
        id="passwordSignup"
        type="password"
        placeholder="********"
        v-model.trim="password"
      />
    </div>
    <div class="mb-4">
      <label class="block text-slate-600 text-sm font-bold mb-2" for="password">
        Confirm password
      </label>
      <input
        class="bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
        id="confirmPasswordSignup"
        type="password"
        placeholder="********"
        v-model.trim="confirmPassword"
      />
    </div>
    <div class="flex flex-col items-center justify-between">
      <button class="text-white bg-gray-600 rounded-md py-2 px-4" type="submit">
        Sign up
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleSubmit = async () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    return alert("fill the gaps");
  }
  if (password.value != confirmPassword.value) {
    return alert("Passwords do not match");
  }
  if (password.value.length < 6 || confirmPassword.value.length < 6) {
    return alert("Your password must be at least 6 characters long");
  }
  await userStore.signUp(email.value, password.value, confirmPassword.value);
  router.push('/home')
};
</script>

<style lang="scss" scoped></style>
