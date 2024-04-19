const BASE_URL = 'http://127.0.0.1:3001';

const ENDPOINTS = {
    PROFILE: "/profile/",
    LOGIN: "/login/",
    SIGNUP: "/signup/"
}

export const reqUserData = async (data) => {
    const url = new URL(BASE_URL + ENDPOINTS.LOGIN + data.email + "/" + data.password);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status)
        } else {
            const data = await response.json();
            return data
        }
    } catch (error) {
        console.error(error)
    }
}

export const reqUserSignup = async (data) => {
    const url = new URL(BASE_URL + ENDPOINTS.SIGNUP);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(response.statusText)
        } else {
            const data = await response.json();
            return data
        }
    } catch (error) {
        console.error(error)
    }
}

export const reqUserLogin = async (data) => {
    const url = new URL(BASE_URL + ENDPOINTS.LOGIN + data.email + "/" + data.password);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status)
        } else {
            const data = await response.json();
            return data
        }
    } catch (error) {
        console.error(error)
    }
}