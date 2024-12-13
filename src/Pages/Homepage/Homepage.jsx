import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import mim from '../../assets/yimage.png'

import 'react-loading-skeleton/dist/skeleton.css'

import dataproj from '../../assets/Assets.js'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
const navigate = useNavigate()
    // const fetchsong  = async ()=>{
    //     const resp = await fetch(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=1c657bc54ba09cda30cc224d6468d83b&artist=COLDPLAY&track=Yellow&format=json`)
    //    try {
    //     if (!resp.ok) {
    //         console.log(`Error ${resp.status}`)
    //     }
    //     else{
    //         const data = await resp.json()
    //         console.log(data)
    //     }
    //    } catch (error) {
    //    console.log('error' , error)
    //    }
    // }
    // fetchsong()
    const icondata = [{ image: 'https://pluspng.com/img-png/firebase-logo-png-firebase-google-icon-512x512.png', title: 'Firebase', id: 1, percent: 30 },
    { id: 2, image: 'https://static-00.iconduck.com/assets.00/file-type-vscode-icon-512x508-376y62ux.png', title: 'Visual Studio Code', percent: 100 },
    { id: 3, image: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png', title: 'React js', percent: 60 },
    { id: 4, image: 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png', title: 'HTML', percent: 100 },
    { id: 5, image: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png', title: 'CSS', percent: 100 },
    { id: 6, image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png', title: 'Javacscript', percent: 75 },
    { id: 7, image: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png', title: 'SQL', percent: 100 },
    { id: 8, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042', title: 'Tailwind css', percent: 100 },
    { id: 9, image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png', title: 'Python', percent: 47 },
    { id: 10, image: 'https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png', title: 'GSAP', percent: 24 },
    ]

    

   

    return (
        <div>
            <div className="navbar">
                <Navbar />
            </div>
            <div className='flex items-center justify-around flex-wrap' >
                <div>
                    <h1 className='text-white text-lg' >Hi, Myself <span className='font-extrabold text-2xl text-orange-700 plck' >Krishna Shrivastava</span> a Passionated <span className='font-extrabold text-red-700 text-2xl plcr ' > Frontend Developer</span></h1>
                </div>
                <div className='mim' >
                    <img className='border rounded-full' src={mim} alt="" />
                </div>
            </div>

            <div className='flex items-center justify-center flex-wrap flex-col mb-24' >
                <h1 className='text-sky-500 text-xl font-extrabold' >My Technolgy Stack </h1>

                <div className='flex justify-around items-center flex-wrap gap-3 cursor-pointer mt-3 w-[90%]' >

                    {
                        icondata.map(({ id, image, title, percent }) => (
                            <div key={id} className='flex items-center justify-center flex-col group relative ' >
                                <div className='bg-neutral-800 z-20 skibo p-2 absolute   opacity-0 group-hover:block bottom-0 group-hover:translate-y-[100px] transition-all h-[100px]  duration-300 group-hover:opacity-100 w-40 rounded-lg' >
                                    <h1 className='text-white font-semibold ' >Statistic </h1>
                                    <h1 className='text-white gap-3 flex flex-col' >Skills: <span className='w-full rounded-md  bg-neutral-900 ' ><p className="px-2  text-white font-semibold rounded-md bg-purple-600" style={{ width: `${percent}%` }}>{percent}%</p></span> </h1>
                                </div>
                                <img className='w-20 m-2' src={image} alt="" />
                                <p className='text-white font-semibold' >{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className='text-center text-white font-extrabold text-2xl' >My Qualification</h1>
                <div className='w-full flex justify-center items-center ' >
                    <div className='flex flex-col gap-y-4'  >
                        <div className='flex items-center justify-end' >
                            <h1 className=' text-white text-right plcx font-semibold'>Year 2021</h1>
                            <div className='bg-gray-700 w-3 h-3 rounded-full' ></div>
                            <div className='w-9 bg-gray-700 h-1' ></div>
                        </div>
                        <div>
                            <h1 className='border-b-2 plcx font-semibold border-green-600 text-white'>Completed Diploma in Civil Engineering after 10th</h1>
                        </div>
                        <div className='flex items-center justify-end' >
                            <h1 className=' text-white text-right plcx font-semibold'>Year 2021</h1>
                            <div className='bg-sky-600 w-3 h-3 rounded-full' ></div>
                            <div className='w-9 bg-sky-600 h-1' ></div>
                        </div>
                    </div>
                    <div className='w-1 plce  h-56 rounded-full'></div>
                    <div className='flex flex-col gap-y-4 '  >
                        <div>
                            <h1 className='border-b-2 border-gray-700 text-white plcx font-semibold'>Completed 10th Class</h1>
                        </div>
                        <div className='flex items-center justify-start' >

                            <div className='w-9 bg-green-600 h-1' ></div>
                            <div className='bg-green-600 w-3 h-3 rounded-full' ></div>
                            <h1 className=' text-white text-right plcx font-semibold'>Year 2021</h1>

                        </div>

                        <div>
                            <h1 className='border-b-2 border-sky-600 text-white plcx font-semibold'>Now Pursuing Computer Science  Engineering</h1>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <h1 className='text-center text-white font-extrabold text-2xl' >My Project</h1>
                
                <div className='flex items-center justify-around' >
                    {
                        dataproj.map(({ id, image, title, link, para }) => (
                            <div key={id} onClick={()=> navigate(`/detailpage/${id}`) } className='cursor-pointer' >
                                <img className='w-28 rounded-lg' src={image} alt="" />
                                <h1 className='text-white font-semibold text-xl' >{title}</h1>
                                <p className='text-white text-ellipsis'>{para?.slice(0, 24) + ' ...' || "No text available"}</p>

                                <a className='text-white font-semibold' target='/blank' href={link}>View Here</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage
