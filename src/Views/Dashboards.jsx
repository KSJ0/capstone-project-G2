import React from 'react'

import '../Styles/DashBoards.css'
import Cards from '../components/Cards'

const DashBoards = () => {
  return (
    <div className='Dashboards'>
      <h1>Dashboards</h1>
         <div className='Cards-main'>
        <Cards/>
        </div>
         
      


    </div>
  )
}

export default DashBoards