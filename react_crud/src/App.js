import React, { useEffect, useState } from 'react';
import './App.css'
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data); // Set the fetched data to the 'items' state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    
    <div className='container'>
  {items.map((item) => (
    <div key={item._id} className='card'>
      <img src={`/uploads/${item.image}`} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: {item.price}</p>
    </div>
  ))}
</div>
  );
}

export default App;
