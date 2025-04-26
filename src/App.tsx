import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemGrid from './components/ItemGrid';
import AddItemForm from './components/AddItemForm';
import UserProfile from './components/UserProfile';
import { supabase } from './supabaseClient';

const App: React.FC = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await supabase.from('items').select('id, title, price, description, image_url');
      setItems(data || []);
    };
    fetchItems();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemGrid />} />
          <Route path="/add-item" element={<AddItemForm />} />
        </Routes>
        <div>
          <input type="text" placeholder="Search items..." />
        </div>
        <UserProfile />
      </div>
    </Router>
  );
};

export default App;