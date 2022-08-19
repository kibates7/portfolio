import React from 'react';
import SingleProject from './SingleProject'
import '../style/Projects.css'

const Projects = () => {
    return (
        <div className='projects_main'>
            <h1>Projects</h1>
            <div className='projects'>
                <SingleProject 
                src="https://uigstudio.com/uploads/media/blog-post-image/03/933-chris-ried-ieic5Tq8YMk-unsplash%20%281%29.jpg?v=3-0"
                title="Project 1"
                description="Description explaining what the project is."/>
                <SingleProject 
                src="https://miro.medium.com/max/1400/1*ULnvjYy9sFmxnXLIgjRXLQ.png"
                title="Project 2"
                description="Description explaining what the project is."/>
                <SingleProject 
                src="https://cdni.iconscout.com/illustration/premium/thumb/female-software-engineer-at-work-5791080-4841836.png"
                title="Project 3"
                description="Description explaining what the project is."/>
            </div>
        </div>
    );
};

export default Projects;