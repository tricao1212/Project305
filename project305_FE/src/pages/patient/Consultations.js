import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";

const Consultations = (user) => {
    const userInfo = user.user;
    const [pendingConsults, setPendingConsults] = useState([]);
    const acc = useSelector((state) => state.AccountRedux.account);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    const handcreateConsult = async () => {
        console.log("click");
        const consult = {
            patientId: acc.userId,
            doctorId: document.getElementById("Doctor").value,
        };
        axios
            .post("https://localhost:7041/api/RequestConsult", consult)
            .then((res) => {
                console.log(res);
                fetchPendingConsults();
                toast("Created Successful!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fetchPendingConsults = useCallback(async () => {
        axios
            .get(
                "https://localhost:7041/api/RequestConsult/IdPatient?Id=" + acc.userId
            )
            .then((res) => {
                setPendingConsults(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get("https://localhost:7041/api/Doctor/All")
            .then((res) => {
                setDoctors(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(pendingConsults);
    },[]);

    useEffect(() => {
        fetchPendingConsults();
    }, [fetchPendingConsults]);
    if(loading)
        return <div className=""><text className="text-6xl font-bold text-emerald-400 text-center">Loading...</text></div>;
    else 
    return (
        <div className="flex flex-grow flex-col bg-gray-100 p-5 py-10">
            <div className="space-y-5">
                <text className="text-4xl font-bold text-emerald-400">
                    Consultations
                </text>
                <div className="flex flex-row space-x-5">
                    <div className="flex flex-col h-full basis-1/2 space-y-5 p-5 shadow-lg rounded bg-white">
                        <div className="">
                            <text className="font-bold text-xl text-emerald-400 text-center">
                                Consult Form
                            </text>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="Name"
                                className="font-bold text-xl text-emerald-400"
                            >
                                Name
                            </label>
                            <input
                                id="Name"
                                disabled
                                value={userInfo.name}
                                className="rounded-sm border-2 focus:border-[#2185f5] p-3"
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="Doctor"
                                className="font-bold text-xl text-emerald-400"
                            >
                                Doctor
                            </label>
                            <select id="Doctor"
                            className="rounded-sm border-2 focus:border-[#2185f5] p-3"
                            >
                                {doctors.map((doctor) => {
                                    return(
                                        <option value={doctor.id}>{findDoctorName(doctor.id).name}</option>
                                    );
                                })};
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="Message"
                                className="font-bold text-xl text-emerald-400"
                            >
                                Message
                            </label>
                            <textarea
                                id="Message"
                                className="resize-none rounded-sm border-2 focus:border-[#2185f5] p-3"
                                value={"Hello, I would like to consult with you about my health."}
                            ></textarea>
                        </div>
                        <button className="border-0 rounded-xl p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold hover:shadow-md"
                            onClick={() => handcreateConsult()}
                        >
                            Send
                        </button>
                    </div>
                    <div className="flex flex-col h-full basis-1/2 p-5 shadow-lg rounded bg-white">
                        <div className="">
                            <text className="font-bold text-xl text-emerald-400 text-center">
                                Pending Consult
                            </text>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 justify-items-center border-b-2 border-gray-300 py-2">
                                <text className="font-bold">Doctor</text>
                                <text className="font-bold">Message</text>
                            </div>
                            {renderPendingConsults()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function findDoctorName(doctorId) {
        const doctor = doctors.find((doc) => doc.id === doctorId);
        // console.log(doctor);
        return doctor;
    }

    function renderPendingConsults() {
        return pendingConsults.map((consult) => {
            const doctor = findDoctorName(consult.doctorId);
            return (
                <div className="grid grid-cols-3 items-center border-b-2 border-gray-300 py-2">
                    <text className="text-center">{doctor.name}</text>
                    <textarea
                        disabled
                        className="resize-none col-span-2 bg-white"
                        value={
                            "Hello, I would like to consult with you about my health."
                        }
                    ></textarea>
                </div>
            );
        });
    }
};

export default Consultations;