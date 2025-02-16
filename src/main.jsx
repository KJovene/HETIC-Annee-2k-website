import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './providers/store'

import './index.css'
import Header from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import HomePage from './vues/HomePage'
import Editpage from './vues/EditPage'
import RecettePage from './vues/RecettePage'
import MocktailPage from './vues/MocktailPage'

const Layout = () => {
  console.log('  /\/\  (\n ( ^.^ ) )I ❤️ CATS\n   \"/  ( \n ( | | )\n(d b)');

  return (
    <>
    <Provider store={store}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/markdown',
        element: <Editpage/>,
      },
      {
        path: '/recette',
        element: <RecettePage/>,
      },
      {
        path: "/mocktail",
        element: <MocktailPage/>
      },
      {
        path: '/edit/:fileName',
        element: <Editpage />,
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
