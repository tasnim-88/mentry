import React from 'react';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import useRole from '../../../Hooks/useRole';

const DashboardHome = () => {
    const { role } = useRole()

    return (
        <div>
            {
                role == 'admin' ? <AdminDashboard /> : <UserDashboard />
            }


        </div>
    );
};

export default DashboardHome;