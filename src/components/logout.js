import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'

const Logout = ({getUser, setGetUser}) => {

    const handleLogOut = () => {
        auth.signOut()
        setGetUser(null)
    }
    return (
        <div>
            <Button onClick={handleLogOut}>LOGOUT</Button>
        </div>
    )
}

export default Logout
