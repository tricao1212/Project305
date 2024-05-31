import { useState } from 'react'

const CreateAccount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    return (
        <div>
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
                    className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
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
                    type="password"
                    placeholder="Password"
                    className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
                    onInput={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="w-full">
                <label
                    htmlFor="role"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Role
                </label>
                <select className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full" name="role" id="role">
                    <option value="Doctor">Doctor</option>
                    <option value="Patient">Patient</option>
                </select>
            </div>
            <button className="rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold">Create New</button>
        </div>
    )
}

export default CreateAccount
