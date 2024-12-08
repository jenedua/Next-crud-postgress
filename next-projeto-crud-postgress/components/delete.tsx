import {deleteEmployee} from '../lib/actions';
export const DeleteButton = async ({ id }: { id: number }) => {
    const deleteEmployeeWithId = deleteEmployee.bind(null, id);
    return (
        <form action={deleteEmployeeWithId}>
            <button className="btn btn-error">Delete</button>
        </form>
    )
}