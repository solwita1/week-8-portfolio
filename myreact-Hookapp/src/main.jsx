import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Weathermood from './WeatherMoodWidget.jsx'
import ClickCounter from './Counter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickCounter/>

    <Weathermood pic='sun'/>
    <Weathermood pic='rain'/>
    <Weathermood pic='cloud'/>
  </StrictMode>,
)
