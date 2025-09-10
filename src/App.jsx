import { useEffect, useState } from 'react'
import { Header, Body, Login, Browse } from './components';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { useDispatch } from 'react-redux';
import {auth} from './firebase/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser, clearUser } from './store/userSlice.js';

// if the user is not logged in, then by typing /browse in the url, the user should be redirected to login page
// if the user is logged in, then by typing / in the url, the user should be redirected to browse page

// for that I will use a useEffect hook to listen to the auth state changes and then redirect the user accordingly.

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // This is the recommended way to check for auth state changes. Provided by firebase
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName} = user;
    dispatch(setUser({uid: uid, email: email, name: displayName}));
    // when user is signed in -> navigate to browse page

  } else {
    // User is signed out
    dispatch(clearUser());

  }
});
  },[])
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: '/browse',
      element:<Browse />
    }
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
