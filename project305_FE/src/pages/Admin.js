import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CreateAccount from './CreateAccount'
import CreatePatient from './CreatePatient'

const Admin = () => {
    return (
        <div className='md:container md:mx-auto px-16 mt-10'>
            <div className="grid grid-cols-2 gap-2">
                <Link to={"./newaccount"}>
                    <button className="rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold">
                        Create a new account
                    </button>
                </Link>
                <Link to={"./newpatient"}>
                    <button className="rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold">Create a new account</button>
                </Link>
            </div>
            <Routes>
                <Route path='/newaccount' element={<CreateAccount/>}/>
                <Route path='/newpatient' element={<CreatePatient/>}/>
            </Routes>
        </div>
    )
}

export default Admin
