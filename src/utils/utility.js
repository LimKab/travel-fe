export const loadStoredUserData = () => {
    const storedUserdata = localStorage.getItem('userdata');
    if (typeof storedUserdata === 'string') {
        const userdata = JSON.parse(storedUserdata)
        return userdata
    } else {
        return null
    }
}

export const loadStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    if (typeof storedToken === 'string') {
        const userdata = JSON.parse(storedToken)
        return userdata
    } else {
        return null
    }
}