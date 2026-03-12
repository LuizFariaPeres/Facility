import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './Components/Form'
import Cart from './Components/Cart'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/Components/Cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}


