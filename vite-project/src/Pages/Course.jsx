import { Link } from "react-router-dom";
import { CourseTable } from "../Components/Table/CourseTable";
import { SideMenu } from "../Components/common/SideMenu";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export const Course = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <main className='h-screen w-full flex'>
      {/* Side Menu */}
      <section className='grid grid-cols-12 gap-6'>
        <div className='bg-white'>
          <SideMenu />
        </div>

        <div className='overflow-y-autoflex flex-col justify-between '>
          <div className='col-span-10 w-[1320px] flex flex-col gap-4 mt-6'>
            <div className=' font-bold text-xl text-light leading-normal '>
              Courses
            </div>
            <div className='flex justify-between items-center'>
              <h1 className='font-sanss font-bold text-light text-sm tracking-[0.4px]'>
                COURSE LIST
              </h1>
              <div className='h-[32px] w-[223px] p-2 flex gap-1 items-center bg-white'>
                <AiOutlineSearch className='text-light' />
                <input
                  className='h-full w-full outline-none'
                  placeholder='Search'
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
            <div className=' p-2 bg-white'>
              <CourseTable searchQuery={searchQuery} />
            </div>
          </div>
          <div className='h-32 w-[1320px] flex justify-end items-center'>
            <Link to='/addcourse'>
              {" "}
              <button className=' w-[130px] h-[42px] bg-red-200 rounded-md flex items-center justify-center gap-2'>
                <AiOutlinePlus /> Add Course
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
