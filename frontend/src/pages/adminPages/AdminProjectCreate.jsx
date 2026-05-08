// import React,{useState} from 'react'
// // import axios from 'axios'
// import {useNavigate} from 'react-router-dom'
// import { createProject } from '../../services/projectServices'

// const AdminProjectCreate = () => {

//     const [title, setTitle] = useState("")
//     const [description, setDescription] = useState("")
//     const [link, setLink] = useState("")
//     const [githubLink, setGithubLink] = useState("")
//     const [techStack, setTechStack] = useState("")


//     const navigate = useNavigate()
    

//     const handleCreate = async(e) => {
//         e.preventDefault()

//         // console.log(techStack)

//         try{
//             const res = await createProject({title, description, link, githubLink, techStack})

//                   console.log(res)
//                   navigate('/admin')
//         }
//         catch(err) {
//             console.log(err.message)
//         }

//     }


//     return(
//         <>

//         <form onSubmit={handleCreate}>

//             <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Project Name" />
//             <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description:" />
//             <input type="text" onChange={(e) => setLink(e.target.value)} placeholder="Project Live Link" />
//             <input type='text' onChange={(e) => setGithubLink(e.target.value)} placeholder="GitHub Link" />
//             <input type="text"  onChange={(e) => setTechStack([e.target.value])} placeholder="Enter Techs" />

//             <button type="submit">Create</button>

//         </form>
        
//         </>
//     )
// }

// export default AdminProjectCreate


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProject } from '../../services/projectServices'
import '../../css/adminCss/create.css'

const AdminProjectCreate = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [githubLink, setGithubLink] = useState("")
    const [techStack, setTechStack] = useState("")

    const navigate = useNavigate()

    const handleCreate = async (e) => {
        e.preventDefault()

        try {
            const res = await createProject({
                title,
                description,
                link,
                githubLink,
                techStack: techStack
                    .split(',')
                    .map((tech) => tech.trim())
                    .filter((tech) => tech !== "")
            })

            console.log(res)
            navigate('/admin')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="admin-project-create-page">
            <form className="admin-project-create-form" onSubmit={handleCreate}>
                <h1 className="admin-project-create-title">Create Project</h1>
                <p className="admin-project-create-subtitle">
                    Add a new project to your admin dashboard.
                </p>

                <input
                    className="admin-project-create-input"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Project Name"
                />

                <textarea
                    className="admin-project-create-textarea"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    rows="5"
                />

                <input
                    className="admin-project-create-input"
                    type="text"
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Project Live Link"
                />

                <input
                    className="admin-project-create-input"
                    type="text"
                    onChange={(e) => setGithubLink(e.target.value)}
                    placeholder="GitHub Link"
                />

                <input
                    className="admin-project-create-input"
                    type="text"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    placeholder="Enter Techs (comma separated)"
                />

                <button className="admin-project-create-button" type="submit">
                    Create
                </button>
            </form>
        </div>
    )
}

export default AdminProjectCreate