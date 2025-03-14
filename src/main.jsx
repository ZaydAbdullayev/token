import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ModuleS from './module.jsx'
import LenisComponent from './lenis.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <ModuleS />
    {/* <LenisComponent/> */}
  </StrictMode>
);
