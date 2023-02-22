import { useAuthStore } from "@/stores"


export const fetchWrapper = {
    get: request('GET'),
    post: request('POST')
}

function request(method: string) {
    return async (url: string, body: object | null) => {
        const headers = new Headers(authHeader())

        const requestOptions: RequestInit = {
            method
        }

        if (body) {
            headers.set('Content-Type', 'application/json')
            requestOptions.body = JSON.stringify(body);
        }

        requestOptions.headers = headers

        const response = await fetch(url, requestOptions)
        return handleResponse(response)
    }
}

function authHeader() {
    const { user } = useAuthStore()

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token }
    } else {
        return undefined
    }
}

async function handleResponse(response: Response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json')
    const data = isJson ? await response.json() : null

    if (!response.ok) {
        const { user, logout } = useAuthStore();
        if ([401, 403].includes(response.status) && user) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            logout();
        }

        // get error message from body or default to response status
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return data
}