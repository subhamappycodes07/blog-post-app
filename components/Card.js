import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = ({ title, desc, authorName, date }) => {
    return (
        <div className=' border-2 border-sky-500 p-4 w-1/4 flex flex-col gap-2 rounded-lg'>
            <h1 className='font-mono font-bold'>{title}</h1>
            <section className='flex-1'>
                <p>{desc}</p>
            </section>
            <footer className='flex justify-between items-center'>
                <div className='font-mono font-bold'>
                    <p>Author : {authorName}</p>
                    <p>{date}</p>
                </div>
                <div className='flex gap-2'>
                    <CreateIcon sx={{ width: '20px', height: '20px' }} className=" cursor-pointer" />
                    <DeleteIcon sx={{ width: '20px', height: '20px' }} className=" cursor-pointer" />
                </div>
            </footer>
        </div>
    )
}

export default Card