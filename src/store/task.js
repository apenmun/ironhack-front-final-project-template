// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      // if(this.tasks.length !== 0){
      //   return;
      // }
      try {
        const { data: tasks } = await supabase
          .from("tasks")
          .select("*")
          .order("id", { ascending: false });
        this.tasks = tasks;
        return tasks;
      } catch (error) {
        console.log(error);
      }
    },
    // Hacer POST
    async addPost(user_id, title) {
      console.log(user_id, title);
      try {
        const { data, error } = await supabase
          .from("tasks")
          .insert({ user_id, title });
        await this.fetchTasks();
      } catch (error) {
        console.log(error);
      }
    },
    // Hacer el PUT (edit)
    async editPost() {
      try {
        const { error } = await supabase
          .from("task")
          .update({ user_id, title })
          .eq("id", id);
      } catch (error) {
        console.log(error);
      }
    },
    // Hacer el delete
    async deletePost(id) {
      try {
        const { error } = await supabase.from("tasks").delete().eq("id", id);
      } catch (error) {
        console.log(error);
      }
    },
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
