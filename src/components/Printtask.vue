<template>
  <div
    class="bg-emerald-100 py-8 px-6 rounded-md my-5"
    style="width: 50%; margin: 2% auto"
    v-for="task in taskStore.tasks"
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
        v-model="task.title"
      />
      <button @click="handleClickEdit(task.id, task.title)">Confirm</button>
    </div>

    <div class="flex flex-row items-center justify-between">
      <button
        @click="handleClick(task.id)"
        class="text-white bg-gray-600 rounded-md py-2 px-4"
        type="submit"
      >
        Delete
      </button>

      <ButtonEditPost @change-to-input="changeToInput" />
      <!-- Esto es un comentario  <button
        @change-event="changeToInput"
        class="text-white bg-gray-600 rounded-md py-2 px-4"
        type="submit"
      >
        Edit
      </button>  
      <p
          class="text-gray-600"
          v-if="task.is_completed"
          style="text-decoration: line-through"
        >
          {{ task.title }}
        </p>
        <p class="text-gray-600" v-else>{{ task.title }}</p>-->

      <div class="flex flex-row items-center">
        <input
          type="checkbox"
          v-model="task.is_complete"
          @change="handleClickCheckbox(task.id, task.is_complete)"
        />
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";
import ButtonEditPost from "./ButtonEditPost.vue";

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
  console.log(editTask.value);
  editTask.value = !editTask.value;
  console.log("EDIT POST", editTask.value);
}

const handleClickEdit = async (id, title) => {
  await taskStore.editPost(id, title);
  await getTasks();
  editTask.value = true;
};

const handleClickCheckbox = async (id, is_complete) => {
  await taskStore.updatePost(id, is_complete);
  //await getTasks();
};  

</script>




<style lang="scss" scoped></style>
