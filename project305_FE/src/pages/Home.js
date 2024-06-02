import React from 'react';
import Sidebar, { SidebarItem } from '../Components/Sidebar';

function PatientHome() {
    return (
        <div className='flex flex-row'>
            {/* <div className='max-w-xs'>
                <Sidebar>
                    <SidebarItem text='Home' />
                    <SidebarItem text='Health status' />
                    <SidebarItem text='Consultations' />
                    <SidebarItem text='Payments' />
                </Sidebar>
            </div> */}
            <div className='flex flex-grow bg-gray-100'>
                <div className='p-20 space-y-5'>
                    <text className='text-4xl font-bold text-emerald-400'>Welcome Name</text>
                    <div className='block flex flex-row space-x-4'>
                        <div className='block relative max-w-sm'>
                            <img src='https://images.unsplash.com/photo-1522241112606-b5d35a468795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='appointment' className='w-full shadow-md' />
                            <button className='absolute bottom-0 w-full h-1/4 bg-black bg-opacity-50 text-white text-center py-2 mb-5'>Go to Consultant</button>
                        </div>
                        <div className='block relative max-w-sm'>
                            <img src='https://images.unsplash.com/photo-1522241112606-b5d35a468795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='appointment' className='w-full shadow-md' />
                            <button className='absolute bottom-0 w-full h-1/4 bg-black bg-opacity-50 text-white text-center py-2 mb-5'>See more health status</button>
                        </div>
                        <div className='block relative max-w-sm'>
                            <img src='https://images.unsplash.com/photo-1522241112606-b5d35a468795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='appointment' className='w-full shadow-md' />
                            <button className='absolute bottom-0 w-full h-1/4 bg-black bg-opacity-50 text-white text-center py-2 mb-5'>See more payments</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='shadow-md p-3 rounded flex flex-col'>
                            <h1 className='font-bold text-xl text-emerald-400'>Last Health Status:</h1>
                            <div className='flex flex-col ps-4'>
                                <div className='flex justify-evenly border-b-2 border-gray-300 py-2'>
                                    <text className='font-bold'>Blood Pressure</text>
                                    <text className='font-bold'>Heart Rate</text>
                                    <text className='font-bold'>Temperature</text>
                                    <text className='font-bold'>Weight</text>
                                </div>
                                <div className='flex justify-around border-b-2 border-gray-300 py-2'>
                                    <text>120/80</text>
                                    <text>80</text>
                                    <text>36.5</text>
                                    <text>70</text>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md p-3 rounded flex flex-col'>
                            <h1 className='font-bold text-xl text-emerald-400'>Next Consultation:</h1>
                            <div className='flex flex-col ps-4'>
                                <div className='flex justify-around border-b-2 border-gray-300 py-2'>
                                    <text className='font-bold'>Date</text>
                                    <text className='font-bold'>Time</text>
                                    <text className='font-bold'>Doctor</text>
                                </div>
                                <div className='flex justify-around border-b-2 border-gray-300 py-2'>
                                    <text>12/5/2019</text>
                                    <text>15 pm</text>
                                    <text>James</text>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md p-3 rounded flex flex-col'>
                            <h1 className='font-bold text-xl text-emerald-400'>Last Payment:</h1>
                            <div className='flex flex-col ps-4'>
                                <div className='flex justify-around border-b-2 border-gray-300 py-2'>
                                    <text className='font-bold'>Date</text>
                                    <text className='font-bold'>Amount</text>
                                </div>
                                <div className='flex justify-around border-b-2 border-gray-300 py-2'>
                                    <text>12/12/2021</text>
                                    <text>100</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DoctorHome() {
    return (
        <div className='flex flex-row'>
            <div className='max-w-xs'>
                <Sidebar>
                    <SidebarItem text='Home' />
                    <SidebarItem text='Patients' />
                    <SidebarItem text='Consultations' />
                </Sidebar>
            </div>
            <div className='flex bg-[#cae9ec] flex-grow'>
                <h1>Doctor Home Page</h1>
                <div>
                </div>
            </div>
        </div>
    );
}

function AdminHome() {
    return (
        <div>
            <h1>Admin Home Page</h1>
            {/* Other components or elements */}
        </div>
    );
}

export { PatientHome, DoctorHome, AdminHome };