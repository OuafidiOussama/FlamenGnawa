import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import PathConstants from '../routes/PathConstants'

export default function AdminRoute({children}) {
    const location = useLocation()
    const memberAllowedRoutes = ["/dashboard", "/blog_table", '/blog_form']
    const {user} = useSelector(state=>state.auth)
    if(user && user.role ==='super'){
        return children
    }
    if(user && user.role === 'member'){
        if(memberAllowedRoutes.includes(location.pathname.toLocaleLowerCase())){
            return children
        }
        return <Navigate to={PathConstants.DASHBOARD} />
    }
    return <Navigate to={PathConstants.HOME} />
}