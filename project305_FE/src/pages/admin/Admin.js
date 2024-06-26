import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateAccount from './CreateAccount'
import CreatePatient from './CreatePatient'
import Sidebar, { SidebarItem } from '../../Components/Sidebar'
import CreateDoctor from './CreateDoctor'
import ListUsers from './ListUsers'

const Admin = () => {
    return (
        <div className="flex flex-row">
            <div className="w-1/5 shrink-0">
                <Sidebar>
                    <SidebarItem text="List Users" navigation="/admin"/>
                    <SidebarItem text="Create Account" navigation="/admin/newaccount"/>
                    <SidebarItem text="Create Patient" navigation="/admin/newpatient"/>
                    <SidebarItem text="Create Doctor" navigation="/admin/newdoctor" />
                </Sidebar>
            </div>
            <Routes>
                <Route path='/' element={<ListUsers/>}/>
                <Route path='/newaccount' element={<CreateAccount/>}/>
                <Route path='/newpatient' element={<CreatePatient/>}/>
                <Route path='/newdoctor' element={<CreateDoctor/>}/>
            </Routes>
        </div>
    )
}

export default Admin
