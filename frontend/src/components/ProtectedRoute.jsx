import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ProtectedRoute = ({ children }) => {

    const [isAuth, setIsAuth] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get(`${API}/api/admin/contact`, {
                    withCredentials: true
                })
                setIsAuth(true)
            } catch {
                setIsAuth(false)
            }
        }

        checkAuth()
    }, [])

    if (isAuth === null) return <p>Checking...</p>

    if (!isAuth) return <Navigate to="/admin/login" />

    return children
}

export default ProtectedRoute
