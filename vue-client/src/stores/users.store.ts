import type { User } from "@/models";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore('users', () => {
    const users = ref<User[]>([])

    return { users }
})