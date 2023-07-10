import React from 'react';
import { useRef, useState } from 'react';
import "../Stockscomponents/Stockimages.css"

const Stockimages = () => {
     const inputRef = useRef(null);
     const [image, setImage] = useState("");

     const handleImageClick = () => {
        inputRef.current.click();
     };

     const handleImageChange = (event) =>{
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
     };


  return (
    <div className='mb-2 images-all' onClick={handleImageClick}>
      <h3>Front View</h3>
    {image ? <img src={URL.createObjectURL(image)}  className="image-upload" alt=''/> : <img src='./upload.png' className='image-upload' alt=''/>}
    
    <input type="file"
           ref={inputRef} 
           onChange={handleImageChange}
           style={{display: "none"}} />
    </div>
  );
}

export default Stockimages