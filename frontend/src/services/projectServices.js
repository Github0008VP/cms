import axios from 'axios'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// GET all projects
export const getProjects = () => {
    return axios.get(`${API}/api/user/projects`)
}

// GET SPECIFIC project
export const getProject = (id) => {
    return axios.get(
        `${API}/api/admin/project/${id}`,
        { withCredentials: true }
    )
}

// DELETE project
export const deleteProject = (id) => {
    return axios.delete(`${API}/api/admin/project/${id}`, {
        withCredentials: true
    })
}

// CREATE project
export const createProject = (data) => {
    return axios.post(`${API}/api/admin/project`, data, {
        withCredentials: true
    })
}

// UPDATE project
export const updateProject = (id, data) => {
    return axios.put(`${API}/api/admin/project/${id}`, data, {
        withCredentials: true
    })
}

// GET Messages
export const getMessages = () => {
    return axios.get(`${API}/api/admin/contact`, {withCredentials: true})
}