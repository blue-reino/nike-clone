import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Topbar from './components/topbar'
import Home from './pages/home'


function App() {
  return (
    <>
    <Topbar/> 
    <Navbar/>
    <Home />
    </>
  );
}

export default App;
