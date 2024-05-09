import Pagination from "@/Components/Pagination";
import { Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function UserIndex({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User</h2>}
        >
            <Head title="User" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between item-center">
                                <label>Total Data User : {users.total}</label>
                                
                                <Link 
                                href={route('users.create')}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Create User
                                </Link>
                            </div>
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2"> 
                                        <th 
                                        className="px-6 py-3 text-lef text-lg font-medium text-black">
                                            Id</th>
                                        <th 
                                        className="px-6 py-3 text-lef text-lg font-medium text-black">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-lef text-lg font-medium text-black">
                                            Email
                                        </th>
                                        <th 
                                        className="px-6 py-3 text-lef text-lg font-medium text-black">
                                            Role
                                        </th>
                                        <th 
                                        className="px-6 py-3 text-lef text-lg font-medium text-black">
                                            &nbsp;
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map(({ id, name, email, role }) => (
                                        <tr key={id} className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                    {id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                    {name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                    {email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                    {role}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Link 
                                                className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                                    href={route(
                                                        "users.edit", id
                                                    )}
                                                    >
                                                        Edit
                                                    </Link>
                                            </td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </table>
                            <Pagination links={users.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
