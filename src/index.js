import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage';
import Model3Page from './pages/Model3Page';
import ModelXPage from "./pages/ModelXPage" ;
import CyberTruckPage from './pages/CyberTruckPage';
import App from './App';
import ShopPage  from'./pages/ShopPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <App>
      <HomePage />,
    </App>
  },  
  {
    path: "/model_3",
    element: 
    <App>
     <Model3Page />
    </App>,
  },
  {
    path: "/model_x",
    element: 
    <App >
      <ModelXPage />
    </App>
  },
  {
    path: "/cybertruck",
    element: 
    <App>
      <CyberTruckPage />
    </App>
  },
  {
    path: "/shop",
    element: 
    <App>
      <ShopPage />
    </App>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

