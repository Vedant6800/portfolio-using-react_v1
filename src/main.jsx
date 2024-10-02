import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigation from './pages/Navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation></Navigation>
    <App />
  </StrictMode>,
)
