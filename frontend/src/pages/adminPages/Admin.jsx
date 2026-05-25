import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import { deleteProject, getProjects } from "../../services/projectServices";
import "./Admin.css";
import Admins from "./Admins";

const Admin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getProjects();
        setData(res.data.projects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deleteProject(id);
      setData((prev) => prev.filter((projects) => projects._id !== id));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = () => {
    navigate("/admin/create");
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  if (error) return <p className="admin-page-state">Error: {error}</p>;
  if (loading) return <p className="admin-page-state">Loading....</p>;

  return (
    <>
      <Admins />
      <div className="admin-page">
        <div className="admin-page-header">
          <h1 className="admin-page-title">Admin Dashboard</h1>
          <p className="admin-page-subtitle">
            Manage your projects and messages
          </p>
        </div>

        <div className="admin-page-actions">
          <button className="admin-main-btn" onClick={handleCreate}>
            Create Project
          </button>
          <button
            className="admin-secondary-btn"
            onClick={() => {
              navigate("/admin/messages");
            }}
          >
            View Messages
          </button>
        </div>

        <div className="admin-project-list">
          {data.map((project) => (
            <div className="admin-project-item" key={project._id}>
              <div className="admin-project-card-wrap">
                <ProjectCard project={project} />
              </div>

              <div className="admin-project-buttons">
                <button
                  className="admin-action-btn admin-edit-btn"
                  onClick={() => handleEdit(project._id)}
                >
                  Edit
                </button>

                <button
                  className="admin-action-btn admin-delete-btn"
                  onClick={() => handleDelete(project._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;

// import React, {useState, useEffect} from 'react'
// // import axios from 'axios'
// import ProjectCard from '../../components/ProjectCard'
// import {useNavigate} from 'react-router-dom'
// import { deleteProject, getProjects } from '../../services/projectServices'

// const Admin = () => {

//     // logic for fetching and displaying projects
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState("")
//     const navigate = useNavigate()

//     useEffect(() => {

//         const fetch = async() => {

//             try{
//                 const res = await getProjects()
//                 setData(res.data.projects)
//             }
//             catch(err) {
//                 setError(err.message)

//             }
//             finally{
//                 setLoading(false)
//             }
//         }

//         fetch()

//     },[])

//     //  Logic for deleting a project

//     // const [deleteProject, setDeleteProject] = useState(null)

//     const handleDelete = async(id) => {
//         // e.preventDefault()

//         try {

//             const res = await deleteProject(id)
//              setData(prev => prev.filter(projects => projects._id !== id))
//             console.log(res)

//         } catch (error) {
//             console.log(error)
//         }

//     }

//     const handleCreate = () => {
//         navigate('/admin/create')
//     }

//     const handleEdit = (id) => {
//         navigate(`/admin/edit/${id}`)
//     }

//     if(error) return <p>Error: {error} </p>
//     if(loading) return <p>Loading....</p>

//     return(
//         <>
//         {data.map((project)=> (
//             <div key={project._id}>

//             <ProjectCard project = {project} />

//             <button onClick={() => handleDelete(project._id)}>Delete</button>
//             <button onClick={() => handleEdit(project._id)}>Edit</button>
//             </div>
//         ))}

//         <button onClick={handleCreate}>Create Project</button>
//         <button onClick={() => {navigate('/admin/messages')}}>View Messages</button>

//         </>
//     )
// }

// export default Admin
