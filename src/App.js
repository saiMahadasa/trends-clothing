
import './App.css';
import {Routes , Route, useParams , Link} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';

const Hats = () => {
  return(
    <div>
      <h1>This is Hats page</h1>
    </div>
  )
}




function App() {
  return (
    <div className="App">
      <Routes>
      <Route  exact path='/' Component={Homepage} />
      <Route path='/shop/hats' Component={Hats} />
   
      </Routes>
    
    </div>
  );
}

export default App;
