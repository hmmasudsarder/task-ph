import React from 'react'

const User = () => {
    return (
        <div id='about' className='my-20'>
            <h1 className="text-center text-3xl font-bold">Who Can Benefit from Our <span className="text-sky-300">Task Management</span> Website?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="card w-96 bg-sky-300 shadow-2xl mt-10">
                <div className="text-center items-center card-body">
                    <h2 className="card-title ">DEVELOPER'S!</h2>
                    <p className='text-lg'>Efficiently organize and track coding tasks and project timelines.?</p>
                </div>
            </div>
            <div className="card w-96 bg-sky-300 shadow-2xl mt-10">
                <div className="text-center items-center card-body">
                    <h2 className="card-title ">CORPORATE PROFESSIONAL'S!</h2>
                    <p className='text-lg'>Streamline team collaboration and manage projects seamlessly.?</p>
                </div>
            </div>
            <div className="card w-96 bg-sky-300 shadow-xl mt-10 h-44">
                <div className="text-center items-center card-body">
                    <h2 className="card-title uppercase">Banker's!</h2>
                    <p className='text-lg'>Stay organized with financial tasks and deadlines.?</p>
                </div>
            </div>
            <div className="card w-96 bg-sky-300 shadow-xl mt-4">
                <div className="text-center items-center card-body">
                    <h2 className="card-title ">STUDENT'S!</h2>
                    <p className='text-lg'>Keep track of assignments and deadlines with ease.?</p>
                </div>
            </div>
            <div className="card w-96 bg-sky-300 shadow-xl mt-4">
                <div className="text-center items-center card-body">
                    <h2 className="card-title ">ENTREPRENEUR'S!</h2>
                    <p className='text-lg'>Manage your business tasks and project milestones efficiently.</p>
                </div>
            </div>
            <div className="card w-96 bg-sky-300 shadow-xl h-44 mt-4">
                <div className="text-center items-center card-body">
                    <h2 className="card-title uppercase">Freelancer's!</h2>
                    <p className='text-lg'>Organize and prioritize your freelance projects and deadlines.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default User
