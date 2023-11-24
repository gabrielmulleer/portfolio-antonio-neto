import './App.css';
import Header from './Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
