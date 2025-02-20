import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Termekek from './Termekek'
import 'tachyons'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Termekek />
  </StrictMode>,
)
