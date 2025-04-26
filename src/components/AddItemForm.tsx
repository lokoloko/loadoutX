// src/components/AddItemForm.tsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AddItemForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const { data, error } = await supabase.storage
        .from('item-images')
        .upload(`public/${file.name}`, file);

      if (error) {
        console.log('Error uploading image:', error);
      } else {
        setImage(data?.Path);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from('items').insert([
      {
        title,
        description,
        price,
        image_url: image,
        user_id: supabase.auth.user()?.id, // Associate item with logged-in user
      },
    ]);

    if (error) {
      console.log('Error adding item:', error.message);
    } else {
      console.log('Item added!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Item Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item Description"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Item Price"
      />
      <input type="file" onChange={handleImageUpload} />
      <button type="submit">Submit Item</button>
    </form>
  );
};

export default AddItemForm;