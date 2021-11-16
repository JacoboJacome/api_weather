import React from 'react'
import { Link, } from 'react-router-dom'
const Header = () => {
    return (
        <header className="h-16 bg-blue-800 flex flex-row-reverse items-center">
            <Link to="/">
                 <h2 className="ml-10 text-4xl hover:text-gray-400 text-white mx-6">Weather Api</h2>
            </Link>
        </header>
    )
}

export default Header
