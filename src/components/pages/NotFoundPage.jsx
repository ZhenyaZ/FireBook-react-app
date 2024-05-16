import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', marginTop: 25 + '%'}}>
        <h1>404 Not Found</h1>
        <Link to='/'>Click To Back Home</Link>
    </div>
  )
}

export default NotFoundPage