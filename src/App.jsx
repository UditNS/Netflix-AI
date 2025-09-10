import { useState } from 'react'
import { Header, Body, Login, Browse } from './components';
import { createBrowserRouter, RouterProvider } from 'react-router';


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/login",
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
