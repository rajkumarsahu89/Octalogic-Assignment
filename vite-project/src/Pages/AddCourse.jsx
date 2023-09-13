import { useState } from "react";
import { SideMenu } from "../Components/common/SideMenu";
import { useDispatch } from "react-redux";
import { postCourse } from "../Redux/CourseReducer/action";
import { toast } from "react-toastify";

export const AddCourse = () => {
  const [name, setName] = useState("");
  const [desc, setDisc] = useState("");
  const [instructor, setInstructor] = useState("");
  const [inst, setInst] = useState("");
  const [week, setWeek] = useState("");
  const [std, setStd] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    const payload = {
      name: name,
      description: desc,
      instructor: instructor,
      inst: inst,
      week: week,
      std: std,
      price: price,
      status: status,
    };
    dispatch(postCourse(payload))
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("Course Added Sucessfully");
          setName("");
          setDisc("");
          setInstructor("");
          setInst("");
          setWeek("");
          setStd("");
          setPrice("");
          setStatus("");
        }
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className='h-screen w-full flex'>
      {/* Side Menu */}
      <section className='grid grid-cols-12 gap-6'>
        <div className='bg-white'>
          <SideMenu />
        </div>

        <div className='col-span-10 w-[1320px] m-auto overflow-y-auto flex flex-col gap-4 mt-6'>
          <div className=' border border-stone-300 rounded-md drop-shadow-2x p-1 w-[45%] m-auto flex flex-col justify-center bg-white'>
            <h2 className='text-center text-xl font-sanss font-bold mt-2'>
              Add Course
            </h2>
            <div className=' w-[70%]  m-auto mt-6'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Name{" "}
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Enter Name'
                    className='w-full border border-stone-300 h-10 p-1 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Descripton{" "}
                  </label>
                  <input
                    type='text'
                    value={desc}
                    onChange={(e) => setDisc(e.target.value)}
                    placeholder='Enter Descripton'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>

                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Instructor{" "}
                  </label>
                  <input
                    type='text'
                    value={instructor}
                    onChange={(e) => setInstructor(e.target.value)}
                    placeholder='Enter Instructor'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Instrument{" "}
                  </label>
                  <input
                    type='text'
                    value={inst}
                    onChange={(e) => setInst(e.target.value)}
                    placeholder='Enter Instrument'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Day of Week{" "}
                  </label>
                  <input
                    type='text'
                    value={week}
                    onChange={(e) => setWeek(e.target.value)}
                    placeholder='Enter Day of Week'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    No of Students{" "}
                  </label>
                  <input
                    type='text'
                    value={std}
                    onChange={(e) => setStd(e.target.value)}
                    placeholder='Enter No of Students'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Price{" "}
                  </label>
                  <input
                    type='text'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder='Enter Price'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Status{" "}
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  >
                    <option value=''>Select</option>
                    <option value='Active'>Active</option>
                    <option value='Closed'>Closed</option>
                    <option value='Archived'>Archived</option>
                  </select>
                </div>
                <div className='flex items-center justify-center my-4 w-full'>
                  <button
                    className='w-full  h-10 font-bold text-lg bg-blue-500'
                    type={"submit"}
                  >
                    {load ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
