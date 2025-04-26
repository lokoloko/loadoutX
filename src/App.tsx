import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar';
import ItemGrid from './components/ItemGrid';
import AddItemForm from './components/AddItemForm';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto py-4">
          <Routes>
            <Route path="/" element={<ItemGrid />} />
            <Route path="/add-item" element={user ? <AddItemForm /> : <Auth />} />
            <Route path="/profile" element={user ? <UserProfile /> : <Auth />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;