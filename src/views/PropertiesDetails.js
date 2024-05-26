import React from 'react'
import { useLocation } from 'react-router-dom'

function PropertiesDetails() {
    const location = useLocation()
    console.log(location.state);
    return (
        <div>{location.state.id}</div>
    )
}

export default PropertiesDetails