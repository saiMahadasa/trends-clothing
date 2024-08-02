
import './App.css';
import {Routes , Route, useParams , Link} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/homepage/shop/ShopPage';
import HeaderComponent from './components/header/HeaderComponent';






function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Routes>
      <Route  exact path='/' Component={Homepage} />
      <Route path='/shop' Component={ShopPage} />
   
      </Routes>
    
    </div>
  );
}

export default App;
