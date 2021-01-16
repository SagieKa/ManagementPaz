import React ,{useEffect} from "react";
import firebase from 'firebase'
import DashData from './DashContent'
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
const hist = createBrowserHistory();


export default function Middlew() {
    const [store,setStore]=React.useState({
        assets:[] , 
        numEdit:4,
    
      })
    
      useEffect(() => {
    var assetdB
    const assetRef = firebase.database().ref('assets')
    assetRef.on('value', (snapshot)=>{
    assetdB= snapshot.val()
    setStore(prev=>({
        ...prev ,
        assets:assetdB
    }))
    })
    

      }, [])
    return(
        <Router history={hist}>
            <DashData.Provider value={{store,setStore}}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </DashData.Provider>
      </Router>

  )
}
