
"use client";
import { useFormState } from "react-dom";
import {saveEmployee} from "../../../../lib/actions";

const CreateEmployeePage = () => {
    const [state, formAction] = useFormState(saveEmployee, null);
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-3xl text-center mb-2 font-bold"> Add new Employee</h1>
            <div>
                <form action={formAction}>
                    <div className="mb-5">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900"> Full Name</label>
                        <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="Full Name..." className="input input-bordered w-full max-w-xs" />
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
                        placeholder="Email..." className="input input-bordered w-full max-w-xs" />
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
                        placeholder="Phone..." className="input input-bordered w-full max-w-xs" />
                            <div id="name-error" aria-live="polite" aria-atomic="true">
                            <p className="mt-2 text-sm text-red-600">{state?.error?.phone}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary"> Save</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployeePage;