import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LightDarkMode } from './Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LightDarkMode />
  </StrictMode>,
)
