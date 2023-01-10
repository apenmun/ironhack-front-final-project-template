<template>
  <form
    class="bg-gray-600 bg-opacity-29 py-8 px-6 rounded-md"
    style="width: 50%; margin: 0 auto"
  >
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input
        class="bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
        id="Email"
        type="text"
        placeholder="example@yourmail.com"
      />
    </div>
    <div class="mb-4 py-4">
      <label class="block text-white text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
        id="password"
        type="password"
        placeholder="********"
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
</template>

<script setup>
import { useUserStore } from '../store/user'
const userStore = useUserStore()
</script>

<style lang="scss" scoped></style>
