import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

const Appointments = (user) => {
    const userInfo = user.user;
    const acc = useSelector((state) => state.AccountRedux.account);
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState({});

    const fetchApponintmentAndDoctors = useCallback(async () => {
        axios
            .get("https://localhost:7041/api/Doctor/All")
            .then((res) => {
                setDoctors(res.data);
                // console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("https://localhost:7041/api/InforConsult/IdPatient?Id=" + acc.userId)
            .then((res) => {
                setAppointments(res.data.data);
                setLoading(false);
                // console.log(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetchApponintmentAndDoctors();
    }, [fetchApponintmentAndDoctors]);

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
            <div className="flex flex-grow flex-col bg-gray-100 p-5 py-10">
                <div className="space-y-5 h-full">
                    <text className="text-4xl font-bold text-emerald-400">
                        Appointments
                    </text>
                    <div className="shadow-md rounded bg-white">
                        <div className="grid grid-cols-7 justify-items-center border-b-2 border-gray-300 py-2">
                            <text className="font-bold">Doctor</text>
                            <text className="font-bold">patient</text>
                            <text className="font-bold">Location</text>
                            <text className="font-bold">Date</text>
                            <text className="font-bold">Message</text>
                            <text className="font-bold">Payment</text>
                            <text className="font-bold ">See detail</text>
                        </div>
                        {renderAppointments()}
                    </div>
                </div>
                {showOverlay && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="flex flex-col space-around bg-white p-4 rounded w-1/2 h-[90%] items-center justify-center space-y-16">
                            <div className="grid grid-cols-2 gap-x-36 w-full border-b-2">
                                <div className="font-bold">Doctor:</div>
                                <div>{findDoctorName(selectedAppointment.doctorId).name}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-36 w-full border-b-2">
                                <div className="font-bold">Patient:</div>
                                <div>{userInfo.name.split(" ").pop()}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-36 w-full border-b-2">
                                <div className="font-bold">Location:</div>
                                <div>{selectedAppointment.appointment}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-36 w-full border-b-2">
                                <div className="font-bold">Date:</div>
                                <div>{DateImprove(selectedAppointment.dateTime)}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-36 w-full border-b-2">
                                <div className="font-bold">Message:</div>
                                <div className="">
                                    {selectedAppointment.message}adslfjkhals
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-36 w-full border-b-2">
                                <div className="font-bold">Payment:</div>
                                <div>{selectedAppointment.fee.toLocaleString()}</div>
                            </div>
                            <button
                                className="border-0 rounded-xl p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold hover:shadow-md"
                                onClick={() => setShowOverlay(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );

    function renderAppointments() {
        return appointments.map(
            (appointment) => {
                return (
                    <div className="grid grid-cols-7 justify-items-center border-b-2 border-gray-300 py-2 auto-rows-auto">
                        <div>{findDoctorName(appointment.doctorId).name}</div>
                        <div>{userInfo.name.split(" ").pop()}</div>
                        <div>{appointment.appointment}</div>
                        <div>{DateImprove(appointment.dateTime)}</div>
                        <div className="w-full truncate">
                            {appointment.message}adsfadfadfafdafsfadfadfadfasdf
                        </div>
                        <div>{appointment.fee.toLocaleString()}</div>
                        <button onClick={() => {
                            setShowOverlay(true)
                            setSelectedAppointment(appointment)
                            }}>
                            <text className="hover:text-blue-700 hover:font-bold">
                                {">>>>"}
                            </text>
                        </button>
                    </div>
                );
            },
            [appointments]
        );
    }

    function findDoctorName(doctorId) {
        const doctor = doctors.find((doc) => doc.id === doctorId);
        // console.log(doctor);
        return doctor || { name: "Unknown" };
    }

    function DateImprove(date) {
        const d = new Date(date);
        return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    }
};

export default Appointments;
