import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Legislacao from './pages/Legislacao.jsx'
import IA from './pages/IA.jsx'
import Sobre from './pages/Sobre.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/sobre", element: <Sobre/>},
  {path: "/legislacao", element: <Legislacao/>},
  {path: "/ia", element: <IA/>}
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
