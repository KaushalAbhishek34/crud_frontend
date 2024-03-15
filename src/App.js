import { useRef } from 'react';
import './App.css';

function App() {
  
  const title= useRef('');
  const description= useRef('');
  const price= useRef('');
  const discountPercentage= useRef('');
  const rating= useRef('');
  const stock= useRef('');
  const brand= useRef('');
  const category= useRef('');
  const thumbnail= useRef('');
  const images= useRef('');


 const submit= async(event) => {
   event.preventDefault();

   const formData={
     title: title.current.value,
     description: description.current.value,
     price: price.current.value,
     discountPercentage: discountPercentage.current.value,
     rating: rating.current.value,
     stock: stock.current.value,
     brand: brand.current.value,
     category: category.current.value,
     thumbnail: thumbnail.current.value,
     images: images .current.value    
   }
   console.log('data is ', formData)
   try{
    const response = await fetch('/api/add-data',{
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputData: formData })
      });

      if (response.ok){
        console.log('data added')
        
      }else{
        console.log('failed to add data')
      }
    }catch (error) {
      console.log('error:-', error)
    }
    
    }
  

 return (
   <>
    <div className='app'>
    <div className='inn'>
    <h2>Add Data</h2>
    </div>
     <form className='form' onSubmit={submit}>
       <div className='inn'>
       <label htmlFor="title" >Title :</label>
       <input type='text'  id='title' ref={title} required />
       </div>
       
       <div className='inn'>
       <label htmlFor="description" >Description :</label>
       <textarea type='text'id='description' ref={description} rows={2} cols={50} required />
       </div>
     
       <div className='inn'>
       <label htmlFor="price" >price :</label>
       <input type='number' id='price' ref={price} required />
     
       </div>
      
       <div className='inn'>
       <label htmlFor="discountPercentage" >Discount Percentage :</label>
       <input type='decimel' id='discountPercentage' ref={discountPercentage} step="0.01" required />
    
       </div>
       <div className='inn'>
       <label htmlFor="rating" >Rating :</label>
       <input type='number'  id='rating'ref={rating} step="0.01" required />
      
       </div>
       <div className='inn'>
       <label htmlFor="stock" >Stock :</label>
       <input type='number'  id='stock' ref={stock} required />
       
       </div>
       <div className='inn'>
       <label htmlFor="brand" >Brand :</label>
       <input type='text'  id='brand' ref={brand} required />
       
       </div>
       <div className='inn'>
       <label htmlFor="category" >Category :</label>
       <input type='text'  id='category' ref={category} required />
       
       </div>
       <div className='inn'>
       <label htmlFor="thumbnail" >Thumbnail :</label>
       <textarea type='text'  id='thumbnail' ref={thumbnail} rows={2} cols={50} required />
       </div>
       <div className='inn'>
       <label htmlFor="images" >Images :</label>
       <textarea type='text'  id='images' ref={images} rows={5} cols={85} required />
       
       </div>
       <br />
       <div className='inn'>
       <button className='submit' type='submit'>Submit</button>
       </div>
     </form>
    </div>
   </>
 )
}

export default App
