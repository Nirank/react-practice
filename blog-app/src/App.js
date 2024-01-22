import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="bg-yellow-300">
      <h1>Nirank</h1>
     <main>
      <Outlet/>
     </main>
    </div>
  );
}

export default App;
