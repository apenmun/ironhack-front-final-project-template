<template>
  <header class="bg-white border-b border-gray-300 mb-8">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <a href="#">
        <span class="sr-only">Your Company</span>
        <img
          class="h-8 w-auto sm:h-20"
          src="../img/DALL·E 2023-01-06 10.27.44.png"
          alt=""
        />
      </a>
      <h1 class="text-3xl font-bold text-gray-900">To Do Light</h1>
      <nav>
        <router-view class="app-main" />

        <div class="flex items-center center">
          <button
            class="text-white bg-gray-600 rounded-md py-2 px-4"
            type="submit"
          >
            <router-link to="/">Authentication</router-link>
          </button>

          <button
            class="text-turquoise bg-emerald-100 rounded-md py-2 px-4"
            type="submit"
          >
            <router-link to="/Home">Home</router-link>
          </button>
          <button
            @click="
              userStore.logOut();
              router.push('/');
            "
            class="text-turquoise bg-teal-300 rounded-md py-2 px-4"
            type="submit"
          >
            Log Out
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
