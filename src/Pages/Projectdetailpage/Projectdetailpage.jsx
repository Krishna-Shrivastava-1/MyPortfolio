import React from 'react'
import { useParams } from 'react-router-dom'
import dataproj from '../../assets/Assets'
const Projectdetailpage = () => {
    const { id } = useParams()
    const project = dataproj.find(item => item.id === Number(id))
    const randomboxshadow = () => {
        const offsetx = Math.floor(Math.random() * 15 - 10); // Random value between -10 and 10
        const offsety = Math.floor(Math.random() * 15 - 10); // Random value between -10 and 10
        const blurradius = Math.floor(Math.random() * 100); // Random value between 0 and 30
        const spreadradius = Math.floor(Math.random() * 10); // Random value between 0 and 10
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${(Math.random()).toFixed(2)})`; 
        return `${offsetx}px ${offsety}px ${blurradius}px ${spreadradius}px ${color}`;
    };
    
    return (
        <div>
            <div>
                {
                    project ? (
                        <div key={project.id} >
                            <img style={{boxShadow: randomboxshadow()}}  className='w-64 rounded-lg  shadow-xl' src={project.image} alt="" />
                            <p className='text-white' >{project.para}</p>
                        </div>
                    ) : (
                        <p>No data get</p>
                    )
                }
            </div>
        </div>
    )
}

export default Projectdetailpage
