import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Todo from './pages/Todo/Todo';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index path="/" element={<Todo />} />
          <Route index path="/auth/login?" element={<Login />} />
          <Route index path="/auth/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
