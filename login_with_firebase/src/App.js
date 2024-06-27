import './App.css';
import Checkout from './components/checkout';
import SignIn from './components/signin';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState(null)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn setUser={setUser}></SignIn>}></Route>
        <Route path="/checkout" element={user?<Checkout></Checkout>:<SignIn setUser={setUser}></SignIn>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
