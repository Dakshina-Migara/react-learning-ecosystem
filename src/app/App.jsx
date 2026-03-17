import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from '../common/component/Themes/ThemeContextProvider'
import Register from '../pages/Register/Register'
import Drawer from '../pages/Drawer/Drawer'
import Login from '../pages/Login/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'


function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    var token = localStorage.getItem('afsd');
    if (token) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }, [])

  return (
    <>
      {
        login ?
          <Drawer />
          :
          <Routes>
            <Route path='*' element={<Navigate to={'/home'} />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
      }
    </>
  )
}
export default App