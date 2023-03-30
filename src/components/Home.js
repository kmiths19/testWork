import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='App1'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/applications'>Applications List</Link>
                </li>
                <li>
                    <Link to='/appsearch'>Search Apps</Link>
                </li>
                <li>
                    <Link to='/search'>Search Resources</Link>
                </li>
                <li>
                    <Link to='/lists'>Show Lists</Link>
                </li>
                <li>
                    <Link to='/resources'>Resources List</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home