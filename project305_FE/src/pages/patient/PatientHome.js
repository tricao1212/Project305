import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";


const PatientHome = (user) => {
    const [Appointment, setAppointment] = useState([]);
    const [Doctor, setDoctor] = useState([]);
    const userInfo = user.user;
    const dateObj = new Date(userInfo.dob);
    const date = dateObj.getDate() + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear();
    const [loading, setLoading] = useState(true);

    const fetchAppointment = useCallback(async () => {
        axios
            .get("https://localhost:7041/api/InforConsult/IdPatient?Id=" + userInfo.id)
            .then((res) => {
                setAppointment(res.data.data[0]);
                // console.log(res.data.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [Appointment]);

    const fetchDoctors = useCallback(async () => {
        axios
            .get("https://localhost:7041/api/Doctor/Id?Id=" + Appointment.doctorId)
            .then((res) => {
                setDoctor(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    },);


    useEffect(() => {
        fetchAppointment();
        fetchDoctors();
    }, [fetchAppointment]);

    if (loading)
        return (
            <div className="">
                <text className="text-6xl font-bold text-emerald-400 text-center">
                    Loading...
                </text>
            </div>
        );
    else
        return (
            <div className='flex flex-grow flex-col bg-gray-100 p-5 py-10'>
                <div className='space-y-5'>
                    <text className='text-4xl font-bold text-emerald-400'>Welcome {userInfo.name.split(" ").pop()}</text>
                    <div className=' flex flex-row space-x-4'>
                        <div className='block relative max-w-sm'>
                            <img src='https://images.unsplash.com/photo-1522241112606-b5d35a468795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='appointment' className='w-full h-full shadow-md' />
                            <button className='absolute bottom-0 w-full h-1/4 bg-black bg-opacity-50 text-white text-center py-2 mb-5'>Home</button>
                        </div>
                        <div className='block relative max-w-sm'>
                            <img src='https://images.unsplash.com/photo-1512867957657-38dbae50a35b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='appointment' className='w-full h-full shadow-md' />
                            <button className='absolute bottom-0 w-full h-1/4 bg-black bg-opacity-50 text-white text-center py-2 mb-5'>Consult a Doctor</button>
                        </div>
                        <div className='block relative max-w-sm'>
                            <img src='https://plus.unsplash.com/premium_photo-1682104376321-63afb07e8f97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='appointment' className='w-full h-full shadow-md' />
                            <button className='absolute bottom-0 w-full h-1/4 bg-black bg-opacity-50 text-white text-center py-2 mb-5'>See your Appoinments</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='shadow-md p-3 rounded bg-white flex flex-col'>
                            <h1 className='font-bold text-xl text-emerald-400'>Health Status:</h1>
                            <div className=''>
                                <div className='grid grid-cols-3 justify-items-center border-b-2 border-gray-300 py-2'>
                                    <text className='font-bold'>Blood Pressure</text>
                                    <text className='font-bold'>Heart Rate</text>
                                    <text className='font-bold'>Temperature</text>
                                </div>
                                <div className='grid grid-cols-3 justify-items-center border-b-2 border-gray-300 py-2'>
                                    <text>{userInfo.predefined.bloodPressure}</text>
                                    <text>{userInfo.predefined.heartRate}</text>
                                    <text>{userInfo.predefined.temperature}</text>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md p-3 rounded bg-white flex flex-col'>
                            <h1 className='font-bold text-xl text-emerald-400'>Next Appointment:</h1>
                            <div className=''>
                                <div className='grid grid-cols-3 justify-items-center border-b-2 border-gray-300 py-2'>
                                    <text className='font-bold'>Doctor</text>
                                    <text className='font-bold'>Location</text>
                                    <text className='font-bold'>Date</text>
                                </div>
                                <div className='grid grid-cols-3 justify-items-center border-b-2 border-gray-300 py-2'>
                                    <text>{Doctor.name}</text>
                                    <text>{Appointment.appointment}</text>
                                    <text>{DateImprove(Appointment.dateTime)}</text>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md p-3 rounded bg-white flex flex-col'>
                            <h1 className='font-bold text-xl text-emerald-400'>Patient Details:</h1>
                            <div className=''>
                                <div className='grid grid-cols-3 justify-items-center border-b-2 border-gray-300 py-2'>
                                    <text className='font-bold'>Full Name</text>
                                    <text className='font-bold'>Address</text>
                                    <text className='font-bold'>Date of Birth</text>
                                </div>
                                <div className='grid grid-cols-3 justify-items-center border-b-2 border-gray-300 py-2'>
                                    <text>{userInfo.name}</text>
                                    <text>{userInfo.address}</text>
                                    <text>{date}</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    function DateImprove(date) {
        const d = new Date(date);
        return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    }
}
export default PatientHome;