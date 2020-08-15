import React,{useEffect} from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/home';
import Checkout from './Checkout';
import Login from './Login'
import {auth} from './Firebase'
import {useStateValue} from './StateProvider'
function App() {
  const[{basket},dispatch]=useStateValue()  
  useEffect(()=>{
     const unsuscribe=   auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
        type:'SET_USER',
        user:authUser
      }
      )
    }else{
      dispatch({
        type:'SET_USER',
        user:null
      }
      )
    }
  })
  return()=>{
    unsuscribe()
  }
  },[])
   
  
  return (

   <Router>
   <div className="App">
     <Switch>
       <Route path='/checkout'>
         <Header/>
         <Checkout/>
       </Route>
       <Route path='/login'>
        <Login/>
       </Route>
       <Route path="/">
         <Header/>
         <Home/>

       </Route>
     </Switch>
   </div>
   </Router>

  );
}

export default App;
