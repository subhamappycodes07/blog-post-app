
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'

const blog = () => {
    const { user, logout } = useAuth()
    const router = useRouter()
    return <>
        <div>
            <nav className='flex justify-between items-center p-6 border border-b  '>
                <div className='text-2xl font-bold'>BLOG-POST</div>
                {
                    user ? (<div className='flex gap-4'>
                        <p>{user.email}</p>
                        <div className="cursor-pointer" onClick={() => {
                            logout()
                            router.push('/login')
                        }}>LogOut</div>
                    </div>) : (
                        <div className='flex gap-4'>
                            <Link href="/login">LogIn</Link>
                            <Link href="/signup">SignUp</Link>
                        </div>
                    )
                }

            </nav >
            <section>
                {user ? (<div>
                    list
                </div>) : (<div>
                    Hi i'am dashboard
                </div>)}
            </section>
        </div >
    </>
}

export default blog