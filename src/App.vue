<template>
  <section>
    <router-view class="app-main" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";
import { RouterLink, RouterView } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: "/" });
    } else {
      // continue to dashboard
      router.push({ path: "/home" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>
<style>
.authForm {
  border: "1px solid red";
}
</style>
