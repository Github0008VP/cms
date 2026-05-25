// multi admin
import {useState} from 'react'
import axios from "axios"
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const CreateAdmin = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleCreate = async () => {

        try {
            const res = await axios.post(`${API}/api/admin/create-admin`, {name, email, password}, {withCredentials: true});
            console.log(res);
            
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
   <>

   <form>

    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Admin's Name" />
    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Admin's Email" />
    <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Admin's Password" />
    
   </form>

   <button onClick={handleCreate}>Create</button>
   
   </>
  )
}

export default CreateAdmin