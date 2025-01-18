import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'

function App() {
  

  return  <BrowserRouter>
          <Routes>
            <Route path='/SignUp' element={<SignUp/>}></Route>
            <Route path="/SignIn" element={<SignIn/>}></Route>
          </Routes>
         </BrowserRouter>
}

export default App

