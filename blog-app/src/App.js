import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="bg-yellow-300">
      <Outlet/>
    </div>
  );
}

export default App;
