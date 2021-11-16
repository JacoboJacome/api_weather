import React from 'react'

const Error = ({status, text}) => {
    return (
        <div className="flex justify-center">
            <h2 className="font-bold text-4xl text-blue-700">{`Error ${status}, ${text}`}</h2>
        </div>
    )
}

export default Error
