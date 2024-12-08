"use client";
import type { Employee } from "@prisma/client";
import { useFormState } from "react-dom";
import { updateEmployee } from "../lib/actions";
const UpdateForm = ( {employee}:{employee:Employee} ) => {
    const updateEmployeeWithId= updateEmployee.bind(null, employee.id);
    const [state, formAction] = useFormState(updateEmployeeWithId,null);
    return (
        <div>
            <form action={formAction}>
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900"> Full Name</label>
                <input 
                type="text" 
                name="name"
                id="name"
                className="input input-bordered w-full max-w-xs" 
                placeholder="Full Name..."
                defaultValue={employee.name}
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-600">{state?.error?.name}</p>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900"> Email</label>
                <input 
                type="email" 
                name="email"
                id="email"
                placeholder="Email..." 
                className="input input-bordered w-full max-w-xs"
                defaultValue={employee.email}
                 />
                 <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-600">{state?.error?.email}</p>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900"> Phone Number</label>
                <input 
                type="text" 
                name="phone"
                id="phone"
                placeholder="Phone..." className="input input-bordered w-full max-w-xs"
                defaultValue={employee.phone}
                 />
                 <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-600">{state?.error?.phone}</p>
                </div>
            </div>
            <button className="btn btn-primary"> Update</button>
            </form>
        </div>
    )
}

export default UpdateForm