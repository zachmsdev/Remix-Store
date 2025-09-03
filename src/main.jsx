
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './components/mainRouter.jsx'
import './styles/global.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <MainRouter />
      </BrowserRouter>
  </StrictMode>
)
