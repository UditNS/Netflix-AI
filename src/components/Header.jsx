import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router';

function Header() {
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    const handleSignOut = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
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