import React from 'react'

const ListTaskCart = ({tas: task}) => {
    return (
        <div className='w-full h-full mx-auto my-4'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{task.title}!</h2>
                    <p>{task.description}?</p>
                </div>
            </div>
        </div>
    )
}

export default ListTaskCart
