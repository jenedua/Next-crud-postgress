/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import  { z } from "zod"; //npm i zod https://www.npmjs.com/package/zod

const EmplouyeeSchema = z.object({
    name: z.string().min(6),
    email: z.string().min(6).email(),
    phone: z.string().min(11),
});

export const saveEmployee = async (prevState: any, formDate:FormData) => {
    const validatedFields = EmplouyeeSchema.safeParse(
        Object.fromEntries(formDate.entries())
    );
    if (!validatedFields.success) {
        return{
            error: validatedFields.error.flatten().fieldErrors,
        }
    }
    try {
        await prisma.employee.create({
            data: {
                name: validatedFields.data.name,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
            },
        });
        console.log("success");
    } catch (error) {
        return{
            message:"Failed to save employee"+error 
        }
        
    }
    revalidatePath("/employee");
    redirect("/employee");

}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getEmployeeList = async (query: string) => {
    try {
        const employees = await prisma.employee.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return employees;
        
    } catch (error) {
        throw new Error("Failed to fetch employees data "+error);
        
    }
    
}
 export const getEmployeeById = async (id: string) => {
    try {
        const employee = await prisma.employee.findUnique({
            where: {
                id: +id,
            },
        });
        return employee;
    } catch (error) {
        throw new Error("Failed to fetch employee data "+error);
        
    }
}
export const updateEmployee = async (
    id: number, 
    prevState: any, 
    formDate: FormData
) => {
    const validatedFields = EmplouyeeSchema.safeParse(
        Object.fromEntries(formDate.entries())
    );    
    if (!validatedFields.success) {
        return{
            error: validatedFields.error.flatten().fieldErrors,
        }
    }
    try {
        await prisma.employee.update({
            where: {
                id: +id,
            },
            data: {
                name: validatedFields.data.name,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
            },
        });
        console.log("success");
    } catch (error) {
        return{
            message:"Failed to update employee"+error 
        }
        
    }
    revalidatePath("/employee");
    redirect("/employee");
    

}
export const deleteEmployee = async (id: number) => {
    try {
        await prisma.employee.delete({
            where: {
                id: +id,
            },
        });
        console.log("success");
    } catch (error) {
        return{
            message:"Failed to delete employee"+error 
        }
        
    }
    revalidatePath("/employee");
    redirect("/employee");
}
