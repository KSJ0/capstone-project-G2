import React from 'react'
import { Routes, Route} from 'react-router-dom'
import UserManagements from './Pages/UserManagements'
import Products from './Pages/Products'
import Stocks from './Pages/Stocks'
import Sales from './Pages/Sales'
import Reports from './Pages/Reports'
import DashBoards from './Views/Dashboards'
import RootLayout from './Layouts/RootLayout'
import Email from './Pages/Email'




const App = () => {
  return (
    
  <RootLayout>
    
   <Routes>
   
    <Route path='/' element={<DashBoards/>}/>
    <Route path='/UserManagements' element={<UserManagements/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Stocks' element={<Stocks/>}/> 
    <Route path='/Sales' element={<Sales/>}/> 
    <Route path='/Reports' element={<Reports/>}/> 
    <Route path='/Email' element={<Email/>}/> 
   </Routes>
   </RootLayout>
   
   
  )
}

export default App
