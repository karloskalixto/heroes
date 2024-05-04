import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShowHeroe  from './components/ShowHeroe'


function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <ShowHeroe/> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
