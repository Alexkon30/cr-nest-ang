import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/models'
import { fetchWrapper, router } from '@/helpers'
import { environment } from '@/environments/environment'


export const useAuthStore = defineStore('auth', () => {
    const userJson = localStorage.getItem('user')
    const user = ref<User | null>(
        userJson !== null ? JSON.parse(userJson) : null
    )
    const returnUrl = ref<string>('/')

    async function login(username: string, password: string) {
        try {
            const authUser = await fetchWrapper.post(`${environment.apiUrl}/auth/login`, { username, password })

            user.value = authUser

            localStorage.setItem('user', JSON.stringify(authUser))

            router.push({path: returnUrl.value})
        } catch (error) {
            console.error(error) // TODO replace for AlertStore
        }

    }

    function logout() {
        user.value = null
        localStorage.removeItem('user')
        router.push({name: 'login'})
    }

    return { user, login, logout }
})
