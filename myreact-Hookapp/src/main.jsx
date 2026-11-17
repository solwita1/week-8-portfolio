import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Weathermood from './WeatherMoodWidget.jsx'
import ClickCounter from './Counter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickCounter/>
    <App/>
    <Weathermood pic='sun'/>
    <Weathermood pic='rain'/>
    <Weathermood pic='cloud'/>
  </StrictMode>,
)
