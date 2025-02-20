import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Regiok from './Regiok'
import 'tachyons'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Regiok />
  </StrictMode>,
)
