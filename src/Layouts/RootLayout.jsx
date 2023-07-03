import Header from '../components/Header'
import Footer from '../components/Footer'
import '../Layouts/RootLayout.css'
import Sidebar from '../components/Sidebar'





const RootLayout = ({children}) => {
  return (
    
    <div className='root-main'>
        <Header />
        
        
        <div className='content'>
         <Sidebar/>
         {children}
         </div>
         
         
        <Footer />
    </div>
  )
}

export default RootLayout