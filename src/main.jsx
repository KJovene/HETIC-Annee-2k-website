import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './vues/HomePage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Dashbord from './components/dashboard/dashboard'

const Layout = () => {
  console.log('  /\\_/\\  (\n ( ^.^ ) _)I ❤️ CATS\n   \\"/  ( \n ( | | )\n(__d b__)')
  return (
    <>
      <header>
       <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
          <Layout />
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/markdown',
        element: <>Markdown</>,
      },
      {
        path: '/recette',
        element: <>Recette</>,
      },
      {
        path: "/mocktail",
        element: <>Mocktail</>
      },
      {
        path: "/dashboard",
        element: <Dashbord/>
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
