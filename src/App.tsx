import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'
import { Home } from './Pages/Home'
import { Workspace } from './Pages/Workspace'


function App() {
  

  return <div>
    
<BrowserRouter>
<div className='flex justify-end bg-bgblue text-white '>
     <Link className='p-2' to="/">Home</Link>
     
      <Link className='p-2' to="/Signup">SignUp</Link> 
     
      <Link className='p-2' to="/Signin">SignIn</Link>

      <Link className='p-2' to={"/Workspace"}>Workspace</Link>
</div>

          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/SignUp' element={<SignUp/>}></Route>
            <Route path="/SignIn" element={<SignIn/>}></Route>
            <Route path='/Workspace' element={<Workspace/>}></Route>
          </Routes>
         </BrowserRouter>
  </div> 
}

export default App

