// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      try {
        const { user, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) throw error;
        if (user) this.user = user;
      } catch (error) {
        console.log(error);
      }
    },
    // Hacer sign in/log in
    async logIn(email, password) {
      try {
        const { user, error } = await supabase.auth.signIn({
          email: email,
          password: password,
        });
        if (error) throw error;
        if (user) this.user = user;
        return {
          status: 200
        };
      } catch (error) {
        console.log(error);
        return {
          status: 400,
          error: error
        };
      }
    },
    // Hacer log out
async logOut () {
  try{
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    if (user) this.user= null;
    return{
      status:200
    };
  } catch (error){
    console.log(error);
    return{
      status:400,
      error:error
    };
  }
},

    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
