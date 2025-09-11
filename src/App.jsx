
import { Login, Browse } from './components';
import { createBrowserRouter, RouterProvider } from 'react-router';



function App() {

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
