import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'

function Home() {
  return (
    <div className="container">
      <div className="row p-5 mb-5">
       <div className="col-6 p-5"></div>
       <h1>Project Fair</h1>
       <p style={{textAlign:"justify"}}>Project management is the process of supervising the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, created at the beginning of the development process. The primary constraints are scope, time and budget.</p>
       <Link to={'/login'}>
       <button className='btn'>Get Started</button>
       </Link>
      
       <div className="col-6">
        <img src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png" alt="" />
       </div>
       
      </div>

     <div className="row p-5 mt-5">
      <h3 className='text-center'>Explore Our Project</h3>
      <div className="row">
       <div className="col-4">
         <ProjectCard/>
       </div>
       <div className="col-4">
         <ProjectCard/>
       </div>
       <div className="col-4">
         <ProjectCard/>
       </div>
      </div>
     </div>

     <div className="row text-center">
      <Link to={'/projects'}>
      <button className='btn'>View Project</button>
      </Link>
     </div>
    </div>
  )
}

export default Home