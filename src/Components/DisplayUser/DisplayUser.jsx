import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router';

const DisplayUser = () => {

    const { user, signOutUser } = useAuth();
    console.log(user.photoURL);


    const handleSignout = () => {
        signOutUser()
            .then()
            .catch()
    }

    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            title={user.displayName}
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL} />
                    </div>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link onClick={handleSignout}>Logout</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DisplayUser;