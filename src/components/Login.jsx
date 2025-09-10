import React, { useRef } from 'react'
import Header from './Header'
import background from '../assets/background_Image.jpg'
import { validateData } from '../utils/validation';
import {signIn} from '../firebase/signIn.js';
import {signUp} from '../firebase/signUp.js';

function Login() {
    const email = useRef(null) // initial value is null;
    const password = useRef(null) 
    const [isSignIn, setIsSignIn] = React.useState(true);
    const [errorEmail, setErrorEmail] = React.useState(null);
    const [errorPassword, setErrorPassword] = React.useState(null);


    const handleButtonClick = async (e) => {
        e.preventDefault();
        // Validate the form inputs here (you can add more validation as needed)
        // To get the input values, you can use useRefs or state Variables.
        
        const response = validateData(email.current.value, password.current.value);
        if(response.errorIn === 'email') {
            setErrorEmail(response.message);
            setErrorPassword(null);
        }
        else if(response.errorIn === 'password') {
            setErrorPassword(response.message);
            setErrorEmail(null);
        }
        else {
            setErrorEmail(null);
            setErrorPassword(null);
    }
    // adding authentication logic here
    if(response.valid) {
        try{
            // create a new user 
            if(!isSignIn) {
                const user = await signUp(email.current.value, password.current.value);
                console.log(user);
            }
            // sign in the user
            else{
                const user = await signIn(email.current.value, password.current.value);
                console.log("udit " +user);
            }
        } catch(err) {
            console.log("hello" + err);
        }
    }
    // Now when i got the user object I want the user to be redirected to the Browse page and also maintain the logged in state across the app. For that I will use Redux Toolkit and React Router.
}
return (
    <div className='relative bg-black h-screen'>
        {/* // background image */}
        <div className='w-full absolute'>
    <img className='h-screen w-full object-cover brightness-50' src={background} alt="background" />
</div>
<Header />
    
    <form onSubmit={handleButtonClick} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4 text-center w-2/6 bg-black/70 py-18 px-14 rounded-sm '>
        <p className='text-white flex font-semibold text-3xl items-start w-full mb-8'>{isSignIn ? "Sign In" : "Sign Up"}</p>
        {!isSignIn && (<input 
            type="text" 
            placeholder='Name' 
            className='px-4 py-3 mb-4 rounded-sm bg-[#1e201f]/60 text-white border border-gray-500 outline-none focus:ring-2 focus:ring-white w-full' 
        />)}
        <input 
            ref={email}
            type="email" 
            placeholder='Email' 
            className={`px-4 py-3 mb-4 rounded-sm bg-[#1e201f]/60 text-white border border-gray-500 outline-none ${errorEmail ? "ring-red-500 ring-2" : 'focus:ring-2 focus:ring-white'} w-full`}
        />
        <p className={`text-red-500 font-light ${errorEmail  ? "flex" : "hidden"} items-start `}>{errorEmail}</p>
        <input 
            ref={password}
            type="password" 
            placeholder='Password' 
            className={`px-4 py-3 mb-4 rounded-sm bg-[#1e201f]/60 text-white border border-gray-500 ${errorPassword ? "ring-red-500 ring-2" : 'focus:ring-2 focus:ring-white'} outline-none  w-full` }
        /> 
        <p className={`text-red-500 font-light ${errorPassword ? "flex" : "hidden"} items-start `}>{errorPassword}</p>
        <button 
            type="submit"
            className='bg-red-600 px-6 py-3 rounded-sm font-bold text-white hover:bg-red-700 transition-colors duration-300 w-full cursor-pointer'
        >
            {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className='text-gray-500 mt-4 flex items-start'>
            {isSignIn ? "New to Netflix?" : "Already have an account?"}
            <span onClick={() => setIsSignIn(!isSignIn)} className='text-white hover:underline font-semibold cursor-pointer' > {isSignIn ? "Sign up now." : "Sign in now."}</span>
        </p>
    </form>
    </div>
)
}

export default Login