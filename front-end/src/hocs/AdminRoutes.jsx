import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PathConstants from '../routes/PathConstants'

export default function AdminRoute({children}) {
    const {user} = useSelector(state=>state.auth)
    return user && user.role === 'super' ? children : <Navigate to={PathConstants.HOME} />
}