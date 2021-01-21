import { useState, useEffect } from 'react';
import './App.css';
import './components/Header';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/cars`)
    .then((response) => response.json())
    .then(setData);
  }, []);

  if (data == null) {
    return null;
  }

  return (
    <div className="App">
      <Header />
      <Main data={ data } />
      <Footer />
    </div>
  );
}

export default App;
