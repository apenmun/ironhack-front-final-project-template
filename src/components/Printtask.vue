<template>
  <div
    class="bg-emerald-100 py-8 px-6 rounded-md my-5"
    style="width: 50%; margin: 2% auto"
    v-for="task in tasks"
  >
    <p
      v-if="editTask"
      class="my-2 bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
    >
      {{ task.title }}
    </p>

    <div v-else>
      <input
        class="my-2 bg-white rounded-md border-gray-400 focus:outline-none focus:shadow-outline-blue appearance-none block w-full px-3 py-2 leading-tight text-gray-700"
      />
      <button @click="handleClickEdit">Confirm</button>
    </div>

    <div class="flex flex-row items-center justify-between">
      <button
        @click="handleClick(task.id)"
        class="text-white bg-gray-600 rounded-md py-2 px-4"
        type="submit"
      >
        Delete
      </button>

      <button
        @change-event="changeToInput"
        class="text-white bg-gray-600 rounded-md py-2 px-4"
        type="submit"
      >
        Edit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";

const user = useUserStore();
const taskStore = useTaskStore();

const tasks = ref([]);

async function getTasks() {
  const res = await taskStore.fetchTasks();
  tasks.value = res;
}

getTasks();

console.log(user.user);

console.log(taskStore.tasks);

const handleClick = async (id) => {
  console.log(id);
  await taskStore.deletePost(id);
  await getTasks();
  console.log("DELETE POST", taskStore.tasks);
};

const editTask = ref(true);

function changeToInput() {
  editTask.value = !editTask.value;
  console.log ("EDIT POST", editTask.value = !editTask.value)
}

const handleClickEdit = async (id, title) => {
  await taskStore.editPost(id, title);
  await getTasks();
};
</script>

<style lang="scss" scoped></style>
