import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import AboutUs from './components/AboutUs.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Layout2 from './Layout2.jsx'
import Dashboard from './components/Dashboard.jsx'
import Clients from './components/Clients.jsx'
import Cases from './components/Cases.jsx'
import Income from './components/Income.jsx'
import AddClient from './components/AddClient.jsx'
import AddIncome from './components/AddIncome.jsx'
import AddCase from './components/AddCase.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "contacts",
        element: <Contact />
      },
      {
        path: "aboutus",
        element: <AboutUs />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "layout2",
        element: <Layout2 />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "clients",
            element: <Clients />
          },
          {
            path: "cases",
            element: <Cases />
          },
          {
            path: "addclient",
            element: <AddClient />
          },
          {
            path: "income",
            element: <Income />
          },
          {
            path: "addincome",
            element: <AddIncome />
          }, {
            path: "addcases",
            element: <AddCase />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

