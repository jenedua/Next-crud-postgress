/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { getEmployeeList } from "../../../lib/actions";
import { formatDate } from "../../../lib/utils";
import { DeleteButton } from "../../../components/delete";

// const Employee = async ({query}:{query:string}) => {
const Employee = async (query:string) => {
    const employees = await getEmployeeList(query);
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-3xl font-bold"> Next.js 15 CRUD</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/employee/create" className="btn btn-primary">
            Create
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Phone Number</th>
                <th className="py-3 px-6">Created At</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {employees.map((rs:any, index:number) => {
                    return (
                        <tr key={rs.id} className="bg-white border-b">
                            <td className="py-3 px-6">{index + 1}</td>
                            <td className="py-3 px-6">{rs.name}</td>
                            <td className="py-3 px-6">{rs.email}</td>
                            <td className="py-3 px-6">{rs.phone}</td>
                            <td className="py-3 px-6">{formatDate(rs.createdAt).toString()}</td>
                            {/* <td className="py-3 px-6">{new Date(rs.createdAt).toLocaleDateString()}</td> */}
                            <td className="flex justify-center gap-1 py-3">
                                <Link 
                                  href={`/employee/edit/${rs.id}`} 
                                  className="btn btn-primary">
                                  Edit 
                                </Link>
                                <DeleteButton id={rs.id} /> 
                            </td>
                        </tr>
                    );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
