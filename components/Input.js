import React from 'react'

const Input = ({ placeholder, type, handleChange }) => {
    return (
        <div >
            <input className='w-full outline-none border border-1 border-gray-400 rounded-md p-2' type={type} placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}

export default Input