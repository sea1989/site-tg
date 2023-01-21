import React from 'react'; 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AuthPage } from './pages/auth-page';
import { HomePage } from './pages/home-page';


function App() {
  return (
    <BrowserRouter>

      <div className='App'>

        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
