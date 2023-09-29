import './App.css';
import Header from './Pages/header.js';
import Routing from './Routing'; // Import Routing component
function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Routing/>
        
      </div>
    </div>
  );
}

export default App;
