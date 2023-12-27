import { useState } from "react"
import CreateTask from "./CreateTask"
import ListTask from "./ListTask";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="">
      <Navbar />
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-4 gap-14">
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
