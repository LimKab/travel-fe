export const loadStoredUserData = () => {
    const storedUserdata = localStorage.getItem('userdata');
    if (typeof storedUserdata === 'string') {
        const userdata = JSON.parse(storedUserdata)
        return userdata
    } else {
        return null
    }
}