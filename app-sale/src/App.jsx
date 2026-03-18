import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Components/Login'
import Form from './Components/Form'
import Cart from './Components/Cart'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Components/Form' element={<Form/>}/>
        <Route path='/Components/Cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}


