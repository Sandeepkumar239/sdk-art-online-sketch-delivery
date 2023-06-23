import React, { useState } from 'react';
import "../styles/Order-part.css";


const Order = () => {
  // const [selectedImage, setSelectedImage] = useState({});
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleImageUpload = (event) => {
    // const file = event.target.files[0];
    // Perform validation for file type and size if needed
    // setSelectedImage(file);
  };

  const handleSizeSelect = (event) => {
    const size = event.target.value;
    setSelectedSize(size);
  };

  const handleTypeSelect = (event) => {
    const type = event.target.value;
    setSelectedType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic here
    // You can access the selectedImage, selectedSize, and selectedType states to process the order
  };

  return (
    
    <div className='outer-container'>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageUpload} />
        </div>
        <div>
          <label htmlFor="size">Select Sketch Size:</label>
          <select id="size" value={selectedSize} onChange={handleSizeSelect}>
            <option value="">Select Size</option>
            <option value="A2">A2</option>
            <option value="A3">A3</option>
            <option value="A4">A4</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="type">Select Sketch Type:</label>
          <select id="type" value={selectedType} onChange={handleTypeSelect}>
            <option value="">Select Type</option>
            <option value="Pencil">Pencil</option>
            <option value="Color">Color</option>
            <option value="Oil">Oil</option>
            <option value="Acrylic">Acrylic</option>
            <option value="PenAndInk">Pen and Ink</option>
          </select>
        </div>

        <div> 
        <label htmlFor="type">Write Your Email</label>
        <div className='email-section'>
        <input  type="email" id="email" placeholder="Enter your email" />
        </div>
        </div>

        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Order;

