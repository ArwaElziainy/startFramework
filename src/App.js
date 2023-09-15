import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Layout from './components/Layout/Layout';
import {RouterProvider, createBrowserRouter, Navigate, createHashRouter } from 'react-router-dom';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NotFound from './components/Notfound/Notfound';
import { Children } from 'react';
function App() {

  let routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
      {path: '', element: <Home/>},
      {path: 'home', element: <Navigate to="/"/>},
        {path: 'about', element: <About/>},
        {path: 'portfolio', element: <Portfolio/>},
        { path: 'contact', element: <Contact /> },
        {path: "*" , element: <NotFound/>}
      ]
    }
  ])
  
  return (
    <div className="App">
      <RouterProvider router={routers}>

      </RouterProvider>
     
    </div>
  );
}

export default App;
