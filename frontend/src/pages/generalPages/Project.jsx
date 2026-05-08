import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ProjectCard from '../../components/ProjectCard'
import '../../css/userCss/project.css'
import Contact from './Contact'
import About from './About'
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Project = () => {

    const [data, setData] = useState([])
    // const [loading, setLoading]= useState(true)
    // const [error, setError] = useState(null)

    useEffect(()=> {

        const fetch = async() => {

            try{
                const res = await axios.get(`${API}/api/user/projects`)
                console.log(res)
                setData(res.data.projects)
            }
            catch(err) {
                console.log(err)
                // setError(err.message)
            }
            finally{
                // setLoading(false)
                console.log(data)

            }

        }

        fetch()

    }, [])

    // if(loading) return <p>Loading....</p>
    // if(error) return <p>Error: {error}</p>
    

    return (

        // <>
        //     {/* {data.map((tech, index) => (
        //         <li key={index}>{tech}</li>
        //     ))} */}

        //     {data.map((project) => (

        //         <ProjectCard projectkey={project._id} project={project} />

        //     ))}
        // </>


        <>
        < About />
              <>
            <div className="project-page">
                <div className="project-page-inner">
                    <div className="project-page-header">
                        <p className="project-page-tag">Portfolio Showcase</p>
                        <h1 className="project-page-title">Our Projects</h1>
                        <p className="project-page-subtitle">
                            A collection of projects that reflect our ideas, skills, and work.
                        </p>
                    </div>

                    <div className="project-grid">
                        {/* {data.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))} */}


                        {data.map((project) => (


                            <div className="project-grid-item" key={project._id}>
                                <ProjectCard projectkey={project._id} project={project} />
                            </div>


                        ))}
                    </div>
                </div>
            </div>
        </>

        < Contact />
        </>


    )
}

export default Project