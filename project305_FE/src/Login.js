import { React, useState } from "react";

function Login() {
    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // state for checking if login
    const [logined, setLogined] = useState(false);
    // placeholder for token when do remember password
    const [token, setToken] = useState("");

    // reset when log out
    function reset() {
        setEmail("");
        setPassword("");
        setLogined(!logined);
    }

    // return ui base on logined state
    function checklogined() {
        if (logined) {
            return (
                <div className="flex flex-col rounded-lg space-y-4 items-center">
                    <img
                        src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
                        alt="logo"
                        className="max-w-24 max-h-md rounded-lg"
                    />
                    <h1 className="text-3xl font-bold text-center my-0">Welcome</h1>
                    <div className="w-full">
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium leading-6 text-gray-900 text-center"
                        >
                            {email}
                        </label>
                    </div>
                    <div className="w-full">
                        <button className="shadow-xl rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:bg-sky-700 w-full" onClick={() => reset()}>
                            <text className="text-white text-lg font-semibold">Log out</text>
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col rounded-lg space-y-4 items-center">
                    <img
                        src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
                        alt="logo"
                        className="max-w-24 max-h-md rounded-lg"
                    />
                    <h1 className="text-3xl font-bold text-center my-0">Welcome</h1>
                    <div className="w-full">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="rounded-sm border-2 active:border-[#2185f5] p-3 w-full"
                            onInput={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Password
                        </label>
                        <input
                            type={hidePass ? "password" : "text"}
                            placeholder="password"
                            className="rounded-sm active:border-[#2185f5] border-2 p-3 w-full"
                            onInput={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex content-center w-full space-x-1">
                            <input type="checkbox" onClick={() => setHidePass(!hidePass)} />
                            <text>Show Password</text>
                        </div>
                    </div>
                    <div className="w-full">
                        <button className="rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:bg-sky-700 w-full">
                            <text className="shadow-xl text-white text-lg font-semibold" onClick={() => setLogined(!logined)}>Login</text>
                        </button>
                    </div>
                </div>
            )
        }
    }


    return (
        // UI 1
        // <div className="h-screen flex justify-center items-center bg-emerald-300">
        //     <div className="w-3/4 h-4/5 columns-2 bg-[#cae9ec] rounded-xl  shadow-xl flex justify-around">
        //         <div className='justify-center'>
        //             <img src='https://img.freepik.com/free-vector/patient-being-examined-by-doctor-clinic-illustration_23-2148863995.jpg?t=st=1716125195~exp=1716128795~hmac=a2db82296db8b9bacd072bbd67370ef52f6d9c9d30c1f2f105601cef5353b903&w=740' alt='img' className='object-cover h-full' />
        //         </div>
        //         <div className="my-[5%] w-1/3 lg:p-12 bg-white bg-opacity-80 rounded-xl shadow-xl">
        //             {checklogined()}
        //         </div>
        //     </div>
        // </div>


        // UI 2
        <div className="relative flex h-screen items-center">
            <img
                src="https://www.reshot.com/preview-assets/illustrations/VSYC6FTH42/medicine-healthcare-VSYC6FTH42-w1600.jpg"
                alt="bg-img"
                className="absolute inset-0 -z-10 w-full h-full"
            />
            <div className="ms-[5%] w-1/3 lg:p-12 bg-white bg-opacity-80 rounded-xl shadow-xl">
                {/* check if login */}
                {checklogined()}
            </div>
        </div>
    );
}

export default Login;
