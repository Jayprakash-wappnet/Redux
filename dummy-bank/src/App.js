import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './layouts/Navbar';
import UpdateAmount from './components/UpdateAmount.jsx'
function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <UpdateAmount/>
    </div>
    </>
  );
}

export default App;
