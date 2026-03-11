import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{RecoilRoot} from 'recoil'

const root = document.getElementById('root')
createRoot(root).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)
