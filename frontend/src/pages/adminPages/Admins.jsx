import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
import "../../css/adminCss/admins.css"


const Admins = () => {
    const navigate = useNavigate()

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`${API}/api/admin/get-admins`, {withCredentials: true});
                console.log(res);
                setAdmins(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetch()
    }, [])

    return (
        <>
            <div className="adminsBox">
                <h1 className="adminsTitle">Admins</h1>

                <div className="adminsList">
                    {admins.map((admin) => (
                        <li key={admin._id} className="adminItem">{admin.name}</li>
                    ))}
                </div>

                <button className="addAdminBtn" onClick={() => navigate('/admin/create-admin')}>
                    Add Admin
                </button>
            </div>
        </>
    )
}

export default Admins




// import axios from 'axios';
// import React, {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
// const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// const Admins = () => {
//     const navigate = useNavigate()

//     const [admins, setAdmins] = useState([]);


// useEffect(() => {

    
//     const fetch = async () => {
        
//         try {
//             const res = await axios.get(`${API}/api/admin/get-admins`, {withCredentials: true});
//             console.log(res);
//             setAdmins(res.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     fetch()

 
// }, [])





//   return (
//     <>
//     <h1>Admins</h1>
//     {admins.map((admin) => (
//         <li key={admin._id}>{admin.name}</li>
//     ))}

//     <button onClick={() => navigate('/admin/create-admin')}>Add Admin</button>
    
//     </>
//   )
// }

// export default Admins