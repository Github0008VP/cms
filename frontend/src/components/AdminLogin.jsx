import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './AdminLogin.css'
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            const res = await axios.post(`${API}/api/admin/login`, {email, password}, {withCredentials: true})
            console.log(res)
            navigate('/admin')
        }
        catch(err) {
            console.log(err)
            // setError(err.message)
        }
        finally{
            // setLoading(false)
        }
    }

    // if(loading) return <p>Loading...</p>
    // if(error) return <p>Error: {error}</p>

    return(
        <>
            <div className="admin-login-page">
                <form className="admin-login-form" onSubmit={handleSubmit}>
                    <h1 className="admin-login-title">Admin Login</h1>
                    <p className="admin-login-subtitle">Welcome back, sign in to continue</p>

                    <input
                        className="admin-login-input"
                        type="email"
                        onChange={(u)=> setEmail(u.target.value)}
                        placeholder="Enter Your Email"
                    />

                    <input
                        className="admin-login-input"
                        type="password"
                        onChange={(u) => setPassword(u.target.value)}
                        placeholder="Enter Your Password"
                    />

                    <button className="admin-login-button" type="submit">
                        submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default AdminLogin






// import React from 'react'
// import {useState} from 'react'
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'


// const AdminLogin = () => {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const navigate = useNavigate()

//     // const [loading, setLoading] = useState(true)
//     // const [error, setError] = useState("")

//     const handleSubmit = async(e) => {
//         e.preventDefault()

//         try{
//             const res = await axios.post('http://localhost:5000/api/admin/login', {email, password}, {withCredentials: true})
//             console.log(res)
//             navigate('/admin')
//         }
//         catch(err) {
//             console.log(err)
//             // setError(err.message)
//         }
//         finally{
//             // setLoading(false)
//         }
//     }

//     // if(loading) return <p>Loading...</p>
//     // if(error) return <p>Error: {error}</p>


//     return(
//         <>
        
//         <form onSubmit={handleSubmit}>
            
//             <input type="email" onChange={(u)=> setEmail(u.target.value)} placeholder="Enter Your Email" />
//             <input type="password" onChange={(u) => setPassword(u.target.value)} placeholder="Enter Your Password" />
//             <button type="submit">submit</button>

//         </form>
        
        
//         </>
//     )
// }


// export default AdminLogin



