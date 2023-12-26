
const CreateTask = ({ tasks, setTasks }) => {
    return (
        <form>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <input type="text" className="border-2 border-slate-400 bg-slate-100 rounded-md h-12 px-2 mx-2" placeholder="Title" />
                <input type="text" className="border-2 border-slate-400 bg-slate-100 rounded-md h-12 px-2" placeholder="Description" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center my-1">
                <input type="text" className="border-2 border-slate-400 bg-slate-100 rounded-md h-12 px-3 mx-2" placeholder="deadlines" />
                <input type="text" className="border-2 border-slate-400 bg-slate-100 rounded-md h-12 px-3" placeholder="priority" />
            </div>
            <div className="text-center">
                <input className="bg-cyan-500 rounded-md px-4 h-12 mt-2 text-white" type="submit" value="Create" />
            </div>
        </form>
    )
}

export default CreateTask
