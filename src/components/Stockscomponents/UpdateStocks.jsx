import React from 'react'
import '../Stockscomponents/UpdateStocks.css'
import Card from 'react-bootstrap/Card';
import Stockimages from './Stockimages';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




const UpdateStocks = () => {

const [brand, setBrand] = useState('')
const [model, setModel] = useState('')
const [color, setColor] = useState('')
const [year, setYear] = useState('')
const [stocks, setStocks] = useState('')
const [price, setPrice] = useState('')
const [branch, setBranch] = useState('')
const navigate = useNavigate();
const {carID} = useParams ();



useEffect(() => {
    axios.get('http://localhost:3001/edit/'+carID)
    .then(res => {
        
     setBrand(res.data[0].brand);
      setModel(res.data[0].model);
     setColor(res.data[0].color);
     setStocks(res.data[0].stocks);
    setYear(res.data[0].year);
    setStocks(res.data[0].stocks);
    setPrice(res.data[0].price);
    setBranch(res.data[0].branch)
    })
    .catch(err => console.log(err));
     
}, [])

    


 const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3001/update/'+carID, {brand, model, color, year, stocks, price, branch})
    .then(res => {
        if(res.data.updated){
          navigate('/stocks')
        } else {
            alert("Not Updated");
        }
    })
}

  return (
    
    <Card className='space'>
        <h1>Update Stocks</h1>
        <form className='form-card' onSubmit={handleSubmit} >

         <div className='mb-2'>
             <label htmlFor="">Brand</label>
             <input type="text" placeholder=''  className='form-control mb-2'
               value={brand} onChange={e => setBrand(e.target.value)} />
         </div>

         <div className='mb-2'>
             <label htmlFor="">Model</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             value={model ? model : 'N/A'} onChange={e => setModel(e.target.value)}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Color</label>
             <input type="text" placeholder=''  className='form-control mb-2'
              value={color} onChange={e => setColor(e.target.value)}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Year</label>
             <input type="date" placeholder=''  className='form-control mb-2'
             value={year} onChange={e => setYear(e.target.value)}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Stocks</label>
             <input type="number" placeholder=''  className='form-control mb-2'
             value={stocks} onChange={e => setStocks(e.target.value)}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Price</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             value={price} onChange={e => setPrice(e.target.value)}/>
         </div>

         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Branch</Form.Label>
        <Form.Control type="text" placeholder="000-0000-0-00" 
        value={branch} onChange={e => setBranch(e.target.value)}/>
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

export default UpdateStocks