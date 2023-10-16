import './App.css';
import Landing from './components/Landing';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/main' element={<Main />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
