import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Cv from './pages/Cv';
import Contactme from './pages/Contactme'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/projects",
          element: <Project />
        },
        {
          path: "/skills",
          element: <Skills />
        },
        {
          path: "/cv",
          element: <Cv />
        },
        {
          path: "/contact",
          element: <Contactme />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
