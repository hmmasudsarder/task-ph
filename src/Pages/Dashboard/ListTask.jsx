import React from 'react'

const ListTask = ({ tasks, setTasks, task }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
      <div className="w-64 h-96 shadow-xl flex justify-center rounded-lg">
        <div className="bg-sky-500 w-60 h-14 flex items-center justify-center rounded-lg">
          <h1 className='text-white'>TODO LIST</h1>
          <div className="mt-80">
            {
              task.map(tas => <div key={tas.id}>
                <div className="card w-40 bg-base-100 mt-2 shadow-xl">
                  <div className="h-28">
                    <div className="card-action text-center mt-2 justify-end">
                      <button className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <p className='text-xl text-center'>{tas.title}</p>
                    <p className='text-center'>{tas.description}</p>
                  </div>
                </div>
              </div>)
            }
          </div>
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
