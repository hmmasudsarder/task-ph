import { useState } from "react"
import CreateTask from "./CreateTask"
import ListTask from "./ListTask";
import Navbar from "../Home/Navbar/Navbar";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
  return (
    <div className="">
      <Navbar/>
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-4 gap-14">
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <ListTask tasks={tasks} setTasks={setTasks} />
    </div>
    </div>
  )
}

export default Dashboard
