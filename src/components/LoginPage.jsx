import React, { useContext, useState } from 'react'
import '../styles/Login.css';
import { mainData } from './App';


const LoginPage = () => {
  let {namex , setNamex} = useContext(mainData);
  
  const [error, setError] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const submitter=()=> {
    if(username === '' || password === '') {
      setError( 'Please Input Respective Fields');
      return;
    }else{
      setError('');
    }
    
    localStorage.setItem(username,password);
    localStorage.setItem('current' , username.split('@')[0]);
    
  }
  const checker=()=> {
    if(localStorage.getItem(username) === null) {

    }
  }
  const creator=()=>{
    let arr = username.split('@');
    setNamex( arr[0]);
    
  }
  return (
    
    <div>

     <img src="https://m.media-amazon.com/images/G/01/Lagoon/AssetLibrary/MyAccount/Login/Banner_Mobile_US_Login10.png" 
     style={{width:'50vh'}} alt="Amazon.com"/>
     <div id="signInBorder"></div>
     <p id="SignInTxt">
        Sign in
      </p>
      <br />
      <label htmlFor="">
        <strong>Email (Phone for Mobile Account)</strong>
        <br />
        <input onChange={(e)=>{setUsername(e.target.value)}} className='cv' type="email"  name='email'/>
        </label>
        <br />
        <label htmlFor="">
            <strong>Password</strong>
            <span><a href="/" id='password'>Forget your password?</a></span>
            <br />
            <input onChange={(e)=>{setPassword(e.target.value)}} className='cv' type="password" name='password'/>
        </label>
        <div className='xc'>
          <h4>{error}</h4>
        </div>
        <div>
            <button onClick={()=>{submitter(); creator();  checker()}} id='amazon'>Sign in</button>
        </div>
        <div id="createAccount">
        <h2 className='xc'><span>New to Amazon?</span></h2>
        <button onClick={()=>{creator()}} id="newAccount" name="newAcct">Create your Amazon account</button>
      </div>
      <hr id='footer'/>

  <div className="extra">
    <p className="links"><a href="#" id="first">Conditions of Use</a>
    <a href="#">Notice of Use</a>
    <a href="#">Help</a></p>
    <p className="links" id="special">
      © 1996-2016, Amazon.com, Inc. or its affiliates
    </p>
  </div>

    </div>
  )
}

export default LoginPage