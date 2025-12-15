import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { AuthContext } from './AuthContext';
// import useAxiosSecure from '../Hooks/useAxiosSecure';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // const axiosSecure = useAxiosSecure();

    // Auth methods
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUser = async(profile) => {
        await updateProfile(auth.currentUser, profile);

        await auth.currentUser.reload();

        setUser({
            ...auth.currentUser,
            ...profile,
        })
    };

    /**
     * 1️⃣ Firebase auth observer
     */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                setUser(null);
                setLoading(false);
                return;
            }

            setLoading(true);

            try {
                const token = await currentUser.getIdToken();

                const res = await axios.get('http://localhost:3000/users/me', {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });

                setUser({
                    ...currentUser,
                    isPremium: res.data.isPremium,
                    role: res.data.role,
                });
            } catch (err) {
                console.error('Failed to sync user', err);
                setUser(currentUser);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);


    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        googleLogin,
        signOutUser,
        updateUser,
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
