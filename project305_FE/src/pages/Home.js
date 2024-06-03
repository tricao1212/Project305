import React from 'react';
import Sidebar, { SidebarItem } from '../Components/Sidebar';
import PatientHome from './patient/PatientHome';

function Home() {
    return (
        <div className='flex flex-row'>
            <div className='max-w-xs'>
                <Sidebar>
                    <SidebarItem text='Home' />
                    <SidebarItem text='Health status' />
                    <SidebarItem text='Consultations' />
                    <SidebarItem text='Payments' />
                </Sidebar>
            </div>
            <PatientHome />
        </div>
    );
}

export default Home ;