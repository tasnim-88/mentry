import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';


const useRole = () => {
    const { user, loading } = useAuth()
    // console.log(user);
    const [role, setRole] = useState('user')
    const [roleLoading, setRoleLoading] = useState(true)
    useEffect(() => {
        if (loading)
            return;
        if (!user?.email) {
            setRole('user');
            setRoleLoading(false);
            return;
        }
        const fetchRole = async () => {
            try {
                const res = await axios.get(`https://digital-life-lessons-server-henna.vercel.app/users/${user?.email}/role`)
                setRole(res.data.role)

            } catch (err) {
                console.log(err);

            }
            finally {
                setRoleLoading(false)
            }
        }
        fetchRole()
    }, [loading, user?.email])

    return { role, roleLoading, loading }
};

export default useRole;