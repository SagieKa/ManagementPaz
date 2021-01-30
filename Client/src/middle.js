import React ,{useEffect} from "react";
import firebase from 'firebase'
import DashData from './DashContent'
import ReactDOM from "react-dom";
import moment from 'moment'
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
const hist = createBrowserHistory();


export default function Middlew() {
    var m = moment("2021-03-01"); 
    var today = moment().startOf('day');
    //we work with - --> if is week ites 7 if mount -30 3 mount -90
    console.log(Math.round(moment.duration(today - m).asDays()))

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
        payWeek:[],
        payMount:[],
        pay3Mount:[],
        numWeek:[],
        numMount:[],
        num3Mount:[],
        maps:[],
        newFlow:0
    
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
      let payWeek=[]
      let numWeek=[]
      let payMount=[]
      let numMount=[]
      let pay3Mount=[]
      let num3Mount=[]
      let name=''
      let tempMap={lat:0,lng:0}
      let maps=[]
      let calc=0
      let newFlow=0
      var today = moment().startOf('day');
      var todayMount = moment().startOf('month');
      let mounts=0
      let numberMounts=0

      assets.map((o,i)=>{
        mounts = moment(o['buy-date']).startOf('month');
        numberMounts=Math.round(moment.duration(todayMount - mounts).asMonths())
        console.log(numberMounts)
        calc = o['current-value']-o['purchase-price']
        console.log(calc)
        calc = calc / numberMounts
        console.log(calc)
        calc +=o['flow']
        console.log(calc)
        newFlow+=calc
        calc=0
        tempMap['lat']=parseFloat(o['x'])
        tempMap['lng']=parseFloat(o['y'])
        maps.push(tempMap)
        tempMap={lat:0,lng:0}
        name=o['adress']
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
        o['Financial'].map((f,i)=>{
          var m = moment(f['financial-date']);
          console.log(Math.round(moment.duration(today - m).asDays()))
          var days=Math.round(moment.duration(today - m).asDays())
          var message='נדרש לשלם '
          message+=f['financial-details']
          message+=' בנכס בכתובת '
          message+=name
          message += ' תשלום '+f['financial-payment'] + " ש''ח"
          message+=" ומע''מ "
          message+=f['financial-vat']
          if(days<0 && days>-8){
            numWeek.push(payWeek.length)
            payWeek.push(message)
          }
          if(days<-8 && days>-30){
            numMount.push(payMount.length)
            payMount.push(message)
          } 
          if(days<-30 && days>-90) {
            num3Mount.push(pay3Mount.length)
            pay3Mount.push(message)
          }
        })

      
        
      })
      newFlow=newFlow.toFixed(2)
console.log(maps)
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
        statusSale,
        payWeek,
        payMount,
        pay3Mount,
        numWeek,
        numMount,
        num3Mount,
        maps,
        newFlow
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
