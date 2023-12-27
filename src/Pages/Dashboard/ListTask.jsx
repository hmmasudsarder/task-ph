import React from 'react'

const ListTask = ({tasks, setTasks}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
      <div className="w-64 h-96 shadow-xl flex justify-center rounded-lg">
        <div className="bg-sky-500 w-60 h-14 flex items-center justify-center rounded-lg">
          <h1 className='text-white'>TODO LIST</h1>
        </div>
      </div>
      <div className="w-64 h-96 shadow-xl flex justify-center rounded-lg">
        <div className="bg-sky-500 w-60 h-14 flex items-center justify-center rounded-lg">
          <h1 className='text-white uppercase'>ongoing</h1>
        </div>
      </div>
      <div className="w-64 h-96 shadow-xl flex justify-center rounded-lg">
        <div className="bg-sky-500 w-60 h-14 flex items-center justify-center rounded-lg">
          <h1 className='text-white uppercase'>completed</h1>
        </div>
      </div>
    </div>
  )
}

export default ListTask
