import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../Redux/CourseReducer/action";

const tableHeader = [
  { title: "Name" },
  { title: "Description" },
  { title: "Instructor" },
  { title: "Instrument" },
  { title: "Day of Week" },
  { title: "# of Students" },
  { title: "Price" },
  { title: "Status" },
  { title: "Actions" },
];

export const CourseTable = ({ searchQuery }) => {
  const course = useSelector((state) => state.coursereducer.course);
  // console.log(course);
  const dispatch = useDispatch();
  const filteredData = course.filter((el) => {
    return (
      el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.inst.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.week.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.std.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  useEffect(() => {
    dispatch(getCourse());
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full h-auto text-left text-sm font-light'>
              <thead className='border-b  border-stone-300'>
                <tr>
                  {tableHeader.map((el, id) => (
                    <th key={id} scope='col' className='px-6 py-4 table-header'>
                      {el.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData?.map((el, i) => (
                  <tr key={i} className='border-b border-stone-300'>
                    <td className='whitespace-nowrap px-6 py-4'>{el.name}</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      {el.description}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      {el.instructor}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>{el.inst}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{el.week}</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      {el.std}
                    </td>{" "}
                    <td className='whitespace-nowrap px-6 py-4'>{el.price}</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div
                        className={`${
                          el.status === "Active"
                            ? "bg-Primary"
                            : el.status === "Closed"
                            ? "bg-red-200"
                            : el.status === "Archived"
                            ? "bg-stone-300"
                            : ""
                        } text-center h-[24px] w-[66px]`}
                      >
                        {el.status}
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>colownm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
