<template>
  <Header></Header>
  <Login v-if="login" />
  <Signup v-else />
  <!-- <button
    @click="change"
    class="text-white bg-gray-600 rounded-md py-2 px-4"
    type="submit"
  >
    Change
  </button>-->
  <Button @change-event="change"/>
  <div>this is auth</div>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import Button from "../components/Button.vue";

const login = ref(true);

function change() {
  login.value = !login.value;
}
</script>

<style lang="scss" scoped></style>
