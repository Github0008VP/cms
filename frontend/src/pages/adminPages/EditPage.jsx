import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { getProject, updateProject } from '../../services/projectServices'

const EditPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchProject = async () => {
            try {
                const res = await getProject()

                setTitle(res.data.title)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProject()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await updateProject(id, {title})

            navigate('/admin')

        } catch (error) {
            console.log(error)
        }
    }

    if (loading) return <p>Loading...</p>

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project Title"
            />
            <button type="submit">Update</button>
        </form>
    )
}

export default EditPage