import { EnrollmentData } from "../Data/db.json";

const tableHeader = [
  { title: "Enr.No" },
  { title: "S.Name" },
  { title: "C.Name" },
  { title: "Fees" },
  { title: "Enr.Date" },
];

export const EnrolTable = ({ showAll }) => {
  const EntriesToShow = showAll ? EnrollmentData.length : 5;

  return (
    <div className='flex flex-col p-2 bg-white'>
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
                {EnrollmentData.slice(0, EntriesToShow).map((el, i) => (
                  <tr key={i} className='border-b border-stone-300'>
                    <td className='whitespace-nowrap px-6'>
                      {el.enrollmentNumber}
                    </td>
                    <td className='whitespace-nowrap px-6'>{el.studentName}</td>
                    <td className='whitespace-nowrap px-6'>{el.courseName}</td>
                    <td className='whitespace-nowrap px-6'>{el.fees}</td>
                    <td className='whitespace-nowrap px-6'>
                      {el.enrollmentDate}
                    </td>
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
