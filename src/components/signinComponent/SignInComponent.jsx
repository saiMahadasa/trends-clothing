import React, { Component } from 'react'
import Button from '../button/Button';
import { signInwithGoogle } from '../../firebase/firebase.utils';

export default class SignInComponent extends Component {
    constructor(){
        super();
        this.state = {
            email : "",
            password : ""
        }
    }
 handleChange = (e) => {
    const {name , value} = e.target;
    this.state({[name] : value})
 }
 handleSubmit = (e) => {
    e.preventDefault();

 }
  render() {
    return (
      <div className='sign-in-container'>
        <h2>I already have an account</h2>
        <span>Signin withyour Email and Password</span>
        <form>
            <label>Email</label>
            <input type='email' name = 'email' value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type='password' name = 'password' value={this.state.password} onChange={this.handleChange} required />
            <div className='buttons-container'> 
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' type='button' onClick={signInwithGoogle}>
            Sign In With Google
          </Button>
        </div>
         </form>
      </div>
    )
  }
}
