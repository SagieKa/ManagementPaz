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
        countLength:0,
        sumOfAssets:0,
        purchasePrice:0,
        loans:0,
        flow:0,
        renterPrice:0,
        priceOfSale:0,
        insurance:0,
        statusBuild:0,
        statusRent:0,
        statusNoRent:0,
        statusSale:0,
    
      })
    const getLength =(assets)=>{
      let length
      try {
        length=assets.length
      } catch (error) {
        length=0
      }
      return length

    }
    const generalClaculte =(assets)=>{
      var currentValue=0
      var purchasePrice=0
      let loans=0
      let flow=0
      let renterPrice=0
      let priceOfSale=0
      let insurance=0
      let statusBuild=0
      let statusRent=0
      let statusNoRent=0
      let statusSale=0
      assets.map((o,i)=>{
       if(o['delivery-date']==="נמכר"){
       priceOfSale+=o['current-value']
       statusSale+=1
      }
      if(o['delivery-date']==="בניה") statusBuild+=1
      if(o['delivery-date']==="מושכר") statusRent+=1
      if(o['delivery-date']==="לא מושכר") statusNoRent+=1
        currentValue+=o['current-value']
        purchasePrice+=o['purchase-price']
        loans+=o['loans']
        flow+=o['flow']
        renterPrice+=o['Renter']['0']['renters-money']
        insurance+=o['insurance']
      
        
      })

      setStore(prev=>({
        ...prev ,
        sumOfAssets:currentValue,
        purchasePrice,
        loans,
        flow,
        renterPrice,
        priceOfSale,
        insurance,
        statusBuild,
        statusRent,
        statusNoRent,
        statusSale
    }))

    }
      useEffect(() => {
    var assetdB
    const assetRef = firebase.database().ref('assets')
    assetRef.on('value', (snapshot)=>{
    assetdB= snapshot.val()
    var length=getLength(assetdB)
    generalClaculte(assetdB)
    setStore(prev=>({
        ...prev ,
        assets:assetdB,
        countLength:length
    }))
    })
    

      }, [])
    return(
        <Router history={hist}>
            <DashData.Provider value={{store,setStore}}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/rtl/index" />
        </Switch>
      </DashData.Provider>
      </Router>

  )
}
