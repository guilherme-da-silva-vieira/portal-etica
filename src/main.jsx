import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Legislacao from './pages/Legislacao.jsx'
import Ia from './pages/Ia.jsx'
import Sobre from './pages/sobre.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/sobre", element: <Sobre/>},
  {path: "/legislacao", element: <Legislacao/>},
  {path: "/ia", element: <Ia/>},
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
