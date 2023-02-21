import type { User } from '@/models'
import { defineStore } from 'pinia'
import router from '@/helpers/router'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const userJson = localStorage.getItem('user')
    const user = ref<User | null>(
        userJson !== null ? JSON.parse(userJson) : null
    )

    async function login(username: string, password: string) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }
    }

    function logout() {
        user.value = null
    }

    return { user, login, logout }
})
