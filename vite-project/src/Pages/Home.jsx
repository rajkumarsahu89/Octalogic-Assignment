import { SideMenu } from "../Components/common/SideMenu";
import "../App.css";
import user from "../assets/user.png";
import { EnrolTable } from "../Components/Table/EnrolTable";
import { useState } from "react";
import { StudentTable } from "../Components/Table/StudentTable";

export const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const [stdshow, setStdShow] = useState(false);
  return (
    <main className='h-screen w-full flex'>
      {/* Side Menu */}
      <section className='grid grid-cols-12 gap-6'>
        <div className='bg-white'>
          <SideMenu />
        </div>

        <div className='col-span-10 w-[1360px] flex flex-col gap-10 border-black mt-6'>
          {/* overview */}
          <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-xl text-light leading-normal '>
              Overview
            </h1>
            <div className=' flex h-[98px] justify-between'>
              {/* div-1 */}
              <div className='rounded-md bg-white h-full w-[250px] flex justify-center items-center'>
                <div className='h-[70px] w-[200px] flex flex-col justify-between '>
                  <div className='h-[46px] flex gap-3'>
                    <div className='flex items-center h-[32px] w-[32px] rounded-full'>
                      <img className='h-full w-full' src={user} alt='' />
                    </div>
                    <div className='h-[46px]  flex flex-col'>
                      <h1 className='font-bold text-lg'>164</h1>
                      <p className='text-sm text-light from-stone-400'>
                        total number of students
                      </p>
                    </div>
                  </div>
                  <div className='flex text-[12px] justify-end text-secondary'>
                    view
                  </div>
                </div>
              </div>
              {/* div-2 */}
              <div className='rounded-md bg-white h-full w-[250px] flex justify-center items-center'>
                <div className='h-[70px] w-[200px] flex flex-col justify-between'>
                  <div className='h-[46px] flex gap-3'>
                    <div className='flex items-center h-[32px] w-[32px] rounded-full'>
                      <img className='h-full w-full' src={user} alt='' />
                    </div>
                    <div className='h-[46px]  flex flex-col'>
                      <h1 className='font-bold text-lg'>12</h1>
                      <p className='text-sm text-light from-stone-400'>
                        total number of courses
                      </p>
                    </div>
                  </div>
                  <div className='flex text-[12px] justify-end text-secondary'>
                    view
                  </div>
                </div>
              </div>{" "}
              {/* div-3 */}
              <div className='rounded-md bg-white h-full w-[250px] flex justify-center items-center'>
                <div className='h-[70px] w-[200px] flex flex-col justify-between '>
                  <div className='h-[46px] flex gap-3'>
                    <div className='flex items-center h-[32px] w-[32px] rounded-full'>
                      <img className='h-full w-full' src={user} alt='' />
                    </div>
                    <div className='h-[46px]  flex flex-col'>
                      <h1 className='font-bold text-lg'>$2000</h1>
                      <p className='text-sm text-light from-stone-400'>
                        total amount earned
                      </p>
                    </div>
                  </div>
                  <div className='flex text-[12px] justify-end text-secondary'>
                    view
                  </div>
                </div>
              </div>{" "}
              {/* div-4*/}
              <div className='rounded-md bg-white h-full w-[250px] flex justify-center items-center'>
                <div className='h-[70px] w-[200px] flex flex-col justify-between '>
                  <div className='h-[46px] flex gap-3'>
                    <div className='flex items-center h-[32px] w-[32px] rounded-full'>
                      <img className='h-full w-full' src={user} alt='' />
                    </div>
                    <div className='h-[46px]  flex flex-col'>
                      <h1 className='font-bold text-lg'>Guitar</h1>
                      <p className='text-sm text-light from-stone-400'>
                        best performing course
                      </p>
                    </div>
                  </div>
                  <div className='flex text-[12px] justify-end text-secondary'>
                    view
                  </div>
                </div>
              </div>{" "}
              {/* div-5 */}
              <div className='rounded-md bg-white h-full w-[250px] flex justify-center items-center'>
                <div className='h-[70px] w-[200px] flex flex-col justify-between '>
                  <div className='h-[46px] flex gap-3'>
                    <div className='flex items-center h-[32px] w-[32px] rounded-full'>
                      <img className='h-full w-full' src={user} alt='' />
                    </div>
                    <div className='h-[46px]  flex flex-col'>
                      <h1 className='font-bold text-lg'>Flute</h1>
                      <p className='text-sm text-light from-stone-400'>
                        worst performing course
                      </p>
                    </div>
                  </div>
                  <div className='flex text-[12px] justify-end text-secondary'>
                    view
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>

          {/* enrolments */}
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center justify-between'>
              <h1 className='font-sanss font-bold text-light text-sm tracking-[0.4px]'>
                LATEST ENROLMENTS
              </h1>
              <div
                onClick={() => setShowAll(!showAll)}
                className=' text-sm text-secondary cursor-pointer'
              >
                View All Courses
              </div>
            </div>
            <EnrolTable showAll={showAll} />
          </div>
          {/* best student */}
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center justify-between'>
              <h1 className='font-sanss font-bold text-light text-sm tracking-[0.4px]'>
                BEST STUDENTS
              </h1>
              <div
                onClick={() => setStdShow(!stdshow)}
                className=' text-sm text-secondary cursor-pointer'
              >
                View All Courses
              </div>
            </div>
            <StudentTable stdshow={stdshow} />
          </div>
        </div>
      </section>
    </main>
  );
};
