
import React from 'react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import RouteProtector from '../components/RouteProtector'

const blog = () => {
    const { user } = useAuth()
    return <>
        <RouteProtector>
            <div>
                <Navbar />
                <section>
                    {user ? (<div>
                        list
                    </div>) : (<div>
                        Hi i'am dashboard
                    </div>)}
                </section>
            </div >
        </RouteProtector>

    </>
}

export default blog