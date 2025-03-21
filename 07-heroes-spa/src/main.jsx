import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { HeroesApp } from './HeroesApp';
import { BrowserRouter } from 'react-router';
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>,
)
