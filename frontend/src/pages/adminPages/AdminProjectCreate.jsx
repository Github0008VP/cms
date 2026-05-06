import React,{useState} from 'react'
// import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { createProject } from '../../services/projectServices'

const AdminProjectCreate = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [githubLink, setGithubLink] = useState("")
    const [techStack, setTechStack] = useState("")


    const navigate = useNavigate()
    

    const handleCreate = async(e) => {
        e.preventDefault()

        // console.log(techStack)

        try{
            const res = await createProject({title, description, link, githubLink, techStack})

                  console.log(res)
                  navigate('/admin')
        }
        catch(err) {
            console.log(err.message)
        }

    }


    return(
        <>

        <form onSubmit={handleCreate}>

            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Project Name" />
            <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description:" />
            <input type="text" onChange={(e) => setLink(e.target.value)} placeholder="Project Live Link" />
            <input type='text' onChange={(e) => setGithubLink(e.target.value)} placeholder="GitHub Link" />
            <input type="text"  onChange={(e) => setTechStack([e.target.value])} placeholder="Enter Techs" />

            <button type="submit">Create</button>

        </form>
        
        </>
    )
}

export default AdminProjectCreate