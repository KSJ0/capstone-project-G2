import Nav from 'react-bootstrap/Nav';
import '../Styles/Stocks.css'
import Sidebar from '../components/Sidebar';


function Stocks() {
  return (
    
  
    
    <Nav variant="tabs" defaultActiveKey="#" className='Nav-1'>
      <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
    </Nav>
  
   
  );
}

export default Stocks