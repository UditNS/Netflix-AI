import React from 'react'
import Header from './Header'

function Login() {
    const [isSignIn, setIsSignIn] = React.useState(true);
return (
    <div className='relative bg-black h-screen'>
        {/* // background image */}
        <div className='w-full absolute'>
    <img className='h-screen w-full object-cover brightness-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg" alt="background" />
</div>
<Header />
    
    <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4 text-center w-2/6 bg-black/70 py-18 px-14 rounded-sm '>
        <p className='text-white flex font-semibold text-3xl items-start w-full mb-8'>{isSignIn ? "Sign In" : "Sign Up"}</p>
        {!isSignIn && (<input 
            type="text" 
            placeholder='Name' 
            className='px-4 py-3 mb-4 rounded-sm bg-[#1e201f]/60 text-white border border-gray-500 outline-none focus:ring-2 focus:ring-white w-full' 
        />)}
        <input 
            type="email" 
            placeholder='Email' 
            className='px-4 py-3 mb-4 rounded-sm bg-[#1e201f]/60 text-white border border-gray-500 outline-none focus:ring-2 focus:ring-white w-full' 
        />
        <input 
            type="password" 
            placeholder='Password' 
            className='px-4 py-3 mb-4 rounded-sm bg-[#1e201f]/60 text-white border border-gray-500 outline-none focus:ring-2 focus:ring-white w-full' 
        /> 
        <button 
            type="submit"
            className='bg-red-600 px-6 py-3 rounded-sm font-bold text-white hover:bg-red-700 transition-colors duration-300 w-full cursor-pointer'
        >
            {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className='text-gray-500 mt-4 flex items-start'>
            {isSignIn ? "New to Netflix?" : "Already have an account?"}
            <p onClick={() => setIsSignIn(!isSignIn)} className='text-white hover:underline font-semibold cursor-pointer' > {isSignIn ? "Sign up now." : "Sign in now."}</p>
            </p>
    </form>
    </div>
)
}

export default Login