import React from 'react'
import { Routes, Route,} from 'react-router-dom'
import UserManagements from './Pages/UserManagements'
import Products from './Pages/Products'
import Stocks from './Pages/Stocks'
import Sales from './Pages/Sales'
import Reports from './Pages/Reports'
import DashBoards from './Views/Dashboards'
import Email from './Pages/Email'
import Sidebar from './components/Sidebar'
import Stockadd from './components/Stockscomponents/Stockadd'
import UpdateStocks from '../src/components/Stockscomponents/UpdateStocks'





const App = () => {
  return (
    
   
    <Sidebar>
   <Routes>
    <Route path='/' element={<DashBoards/>}/>
    <Route path='/userManagements' element={<UserManagements/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/stocks' element={<Stocks/>}/> 
    <Route path='/sales' element={<Sales/>}/> 
    <Route path='/reports' element={<Reports/>}/> 
    <Route path='/email' element={<Email/>}/>
    <Route path='/addstocks' element={<Stockadd/>}/>
    <Route path='/update/:carID' element={<UpdateStocks/>}/>
   
   </Routes>
   </Sidebar>
  
  
   
   
   
   
   
   
   
  )
}

export default App
