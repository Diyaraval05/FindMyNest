import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PropertyForm from './pages/PropertyForm';
import Navbar from './components/Navbar';
import PropertyList from './pages/propertyList';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-property" element={<PropertyForm />} />
        <Route path="/properties" element={<PropertyList />} />

      </Routes>
    </Router>
  );
}

export default App;