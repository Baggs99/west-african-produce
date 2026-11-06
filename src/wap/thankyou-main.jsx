import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './wap.css'
import { ThankYou } from './ThankYou.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThankYou />
  </StrictMode>,
)
