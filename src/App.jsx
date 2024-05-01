import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import {Routes,Route, useLocation} from 'react-router-dom'
import './App.css'
import Details from './components/Details'
import {Link} from 'react-router-dom'
import Create from './components/Create'
import Edit from './components/Edit'
function App() {

  const {search,pathname} = useLocation()
  return (
    <div className='h-screen w-screen flex relative'>

      {
        (pathname !='/' || search.length>0) && (<Link className={`text-red-200 text-2xl absolute ${search.length>0?"left-[23%]":"left-[5%]"} mb-3 top-[3%]`} to="/">Home</Link>)
      
      }

     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/details/:id" element={<Details/>}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/edit/:id" element={<Edit/>} />
     </Routes>

  

    </div> 
  )
}

export default App
