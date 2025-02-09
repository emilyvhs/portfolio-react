import { useEffect } from "react"
import { useState } from "react"
import PortfolioBox from "./PortfolioBox"

export default function PortfolioSection() {

    const [projects, setProjects] = useState([])

    useEffect(getData, [])

    function getData() {
        fetch('projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data.projects)
            })
        
    }

    return (
        <>        
            {projects.map (function(project){
                return <PortfolioBox
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        alt={project.alt}
                        link={project.link}

                        />
            })}
        </>
    )

}