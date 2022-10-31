import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className='w-full bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300' type='submit'>{name}</button>
        </div>
    )
}

export default Button