import { CgMathPlus } from "react-icons/cg";
const CreateTask = ({ tasks, setTasks }) => {
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
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">TITLE</span>
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
                                <span className="label-text">DESCRIPTION</span>
                            </label>
                            <input
                                type="text"
                                name="description"
                                placeholder="DESCRIPTION"
                                className="input input-bordered"
                                required
                            />
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
