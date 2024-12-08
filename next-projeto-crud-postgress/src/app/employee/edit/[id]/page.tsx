import UpdateForm from "../../../../../components/editform";
import { getEmployeeById } from "../../../../../lib/actions";
import { notFound } from "next/navigation";
const UpdateEmployeePage = async ({params}:{params:{id:string} }) => {
    const id = params.id;
    console.log(id);
    const employee = await getEmployeeById(id);
    if (!employee) return notFound();
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-3xl text-center mb-2 font-bold"> Update Employee</h1>
            <UpdateForm employee={employee} />
        </div>
    );
};

export default UpdateEmployeePage;