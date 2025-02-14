import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './vues/HomePage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Dashbord from './components/dashboard/dashboard'
import MocktailPage from './vues/MocktailPage'
import RecetteDuJour from './vues/RecetteDuJour'

const Layout = () => {
  console.log('  /\/\  (\n ( ^.^ ) )I ❤️ CATS\n   \"/  ( \n ( | | )\n(d b)');

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'markdown',
        element: <>Markdown</>,
      },
      {
        path: '/recette',
        element: <RecetteDuJour/>,
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
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
