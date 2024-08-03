import React from 'react';
import './App.css';
import {Routes , Route, useParams , Link} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/homepage/shop/ShopPage';
import HeaderComponent from './components/header/HeaderComponent';
import SignInSignup from './pages/signIn-signUp/SignInSignup';
import {auth} from './firebase/firebase.utils'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unSubscribeFromAuth = null ;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return(
      <div className="App">
      <HeaderComponent currentUser = {this.state.currentUser}/>
      <Routes>
      <Route  exact path='/' Component={Homepage} />
      <Route path='/shop' Component={ShopPage} />
      <Route path = '/signin' Component={SignInSignup} />
      </Routes>
    
    </div>
    )
   
  }
}

export default App;
