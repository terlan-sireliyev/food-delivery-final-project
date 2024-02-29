export default function isAuth() {
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    return (username !== 'terlan' || password !== 'terlan123')
}

export function removeAuth(){
    localStorage.removeItem('username')
    localStorage.removeItem('password')
}