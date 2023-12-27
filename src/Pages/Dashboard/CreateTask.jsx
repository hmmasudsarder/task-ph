import { CgMathPlus } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateTask = ({ tasks, setTasks }) => {

    const navigate = useNavigate();
    const handleProductAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const dateline = form.dateline.value;
        const priority = form.priority.value;
        const description = form.description.value;
        const newTask = { title,  dateline, priority, description};
        console.log(newTask);
        fetch("http://localhost:5000/task", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
            .then((res) => res.json())
            .then((data) => {
                navigate('/dashboard')
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Task has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    form.reset();
                }
            });
    };
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-outline btn-info" onClick={() => document.getElementById('my_modal_3').showModal()}>
                CREATE TASK
                <CgMathPlus className="text-3xl" />
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleProductAdd}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">TITLE</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter Title"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">DESCRIPTION</span>
                            </label>
                            <textarea
                                type="text"
                                name="description"
                                placeholder="DESCRIPTION"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">DATELINE</span>
                            </label>
                            <input
                                type="date"
                                name="dateline"
                                placeholder="SELECT DATE"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Priority</span>
                            </label>
                            <label className="label">
                                <select name="priority" className="input input-bordered w-full">
                                    <option value="low">LOW</option>
                                    <option value=" moderate">MODERATE</option>
                                    <option value="high">HIGH</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info text-white">
                                ADD TASK
                                <CgMathPlus className="text-3xl" />
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default CreateTask
