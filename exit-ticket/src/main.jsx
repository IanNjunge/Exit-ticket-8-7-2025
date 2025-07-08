import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Course, Vision, Mission} from './Exit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <App />
    <Course></Course>
    <Vision></Vision>
    <Mission></Mission>
  </StrictMode>,
)
 
