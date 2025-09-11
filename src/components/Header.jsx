import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../store/userSlice.js';   


function Header() {
    // Header component will be present in both Login and Browse page.
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    // if the user is not logged in, then by typing /browse in the url, the user should be redirected to login page
    // if the user is logged in, then by typing / in the url, the user should be redirected to browse page

    // for that I will use a useEffect hook to listen to the auth state changes and then redirect the user accordingly.

    // By moving user authentication state management to the Header component, I ensure that the app consistently monitors and responds to authentication changes across all pages. This approach centralizes the logic, making it easier to maintain and ensuring that users are redirected appropriately based on their authentication status, regardless of which page they are on.

    useEffect(() => {
    // This is the recommended way to check for auth state changes. Provided by firebase
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName} = user;
            dispatch(setUser({uid: uid, email: email, name: displayName}));
        navigate('/browse');
        } else {
            // User is signed out
            dispatch(clearUser());
            navigate('/');
        }
        });
        return () => unsubscribe();
        // cleanup function to avoid memory leaks
        // it unsubscribes the listener when the component unmounts
    },[])

    

    const handleSignOut = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            // Sign-out successful. 
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });

    }
    return (
        <div className='absolute top-0 pt-0.5 pl-24 z-10 w-full flex  items-center justify-between bg-gradient-to-b from-black'>
            <img className='w-48 h-20 object-contain ' 
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
            {user && (<div className='flex items-center space-x-4 mr-8 cursor-pointer'>
                <img className='w-10 h-10' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="userLogo" />
                <button onClick={handleSignOut} className='text-white hover:underline'>Sign Out</button>
            </div>)}
        </div>
    )
}

export default Header