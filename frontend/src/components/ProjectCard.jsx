import React from 'react'

const ProjectCard = ({project}) => {

    return(
        <>
        
        <h1>{project.title}</h1>
        <p> {project.description} </p>
    
        <ul>
        {project.techStack?.map((tech, index) => (
            <li key={index}>{tech}</li>
        ))}

        </ul>
        <ul>

        
        <li><a href={project.githubLink} target='_blank'>GitHub</a></li>
        <li><a href={project.link} target='_blank'>Live Link</a></li>
        </ul>
        
        
        </>
    )



}

export default ProjectCard