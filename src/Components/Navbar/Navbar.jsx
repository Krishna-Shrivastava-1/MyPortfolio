import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center justify-around p-2' >
                <div className="logo"><h1 className='text-white font-extrabold text-lg select-none cursor-pointer' >Koyo</h1></div>
                <div>
                    <h1 className='text-white font-semibold text-lg p-1 px-5 bg-neutral-800 rounded-full cursor-pointer select-none hover:bg-neutral-700' >Hire Me</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar
