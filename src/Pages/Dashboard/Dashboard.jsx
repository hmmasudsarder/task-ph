import { useState } from "react"
import CreateTask from "./CreateTask"
import ListTask from "./ListTask";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const task = useLoaderData();
  return (
    <div className="">
      <Navbar />
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-4 gap-14">
        <CreateTask tasks={tasks} setTasks={setTasks} />
        {task.length}
        <ListTask tasks={tasks} setTasks={setTasks} task={task} />
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
