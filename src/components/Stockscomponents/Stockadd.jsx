import React from 'react'
import '../Stockscomponents/Stockadd.css'
import Card from 'react-bootstrap/Card';
import Stockimages from './Stockimages';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Stockadd = () => {

const [brand, setBrand] = useState('')
const [model, setModel] = useState('')
const [color, setColor] = useState('')
const [year, setYear] = useState('')
const [stocks, setStocks] = useState('')
const [price, setPrice] = useState('')
const [branch, setBranch] = useState('')
const navigate = useNavigate();



function handleSubmit(event){
  event.preventDefault();
  axios.post('http://localhost:3001/addstocks',{brand, model, color, year, stocks, price, branch})
   .then(res => {console.log(res); navigate('/stocks');
  }).catch(err => console.log(err));
}


  return (
    
    <Card className='space'>
        <h1>Add Stocks</h1>
        <form className='form-card' onSubmit={handleSubmit} >

         <div className='mb-2'>
             <label htmlFor="">Brand</label>
             <input type="text" placeholder=''  className='form-control mb-2'
              onChange={e => setBrand(e.target.value)} />
         </div>

         <div className='mb-2'>
             <label htmlFor="">Model</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setModel(e.target.value)}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Color</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setColor(e.target.value)}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Year</label>
             <input type="date" placeholder=''  className='form-control mb-2'
             onChange={e => setYear(e.target.value)}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Stocks</label>
             <input type="number" placeholder=''  className='form-control mb-2'
             onChange={e => setStocks(e.target.value)}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Price</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setPrice(e.target.value)}/>
         </div>

         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Branch</Form.Label>
        <Form.Control type="text" placeholder="000-0000-0-00" 
        onChange={e => setBranch(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Form>
          <Stockimages/>

          <div>
         <button className='btn btn-sub btn-primary '>Submit</button>
         </div>
         <div>
         <button className='btn btn-sub-2 btn-primary '>cancel</button>
         </div>
        
        </form>

        

        </Card>
 
        
     
   
  )
}

export default Stockadd