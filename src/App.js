
import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./AppRouter";
function App() {
  return (
        <div className="App">
            <BrowserRouter basename={'/'}>
                <NavBar/>
               <AppRouter/>
            </BrowserRouter>
        </div>
  );
}

export default App;
