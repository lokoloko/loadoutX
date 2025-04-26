// src/components/ItemGrid.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const ItemGrid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from('items').select('*');
      if (error) {
        console.log('Error fetching items:', error.message);
      } else {
        setItems(data);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="grid">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.image_url} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;