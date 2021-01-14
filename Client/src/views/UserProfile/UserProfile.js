import React from "react";
import firebase from  '../../utils/firebase'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Alert from '@material-ui/lab/Alert';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useState,useContext } from "react";
import Contants from './contants'
import Operative from './operative'
import Financial from './financial'
import DashData from '../../DashContent'

const assetFormat = {
  'buy-date':'-',
  'delivery-date':'-',
  'project':'-',
  'bank':'-',
  'contractor':'-',
  'entrepreneur':'-',
  'city':'-',
  'adress':'-',
  'building':'-',
  'floor':'-',
  'number':'-',
  'rooms':'-',
  'size(sqm)':'-',
  'terrace(sqm)':'-',
  'storage':'-',
  'parking':'-',
  'purchase-price':'-',
  'current-value':'-',
  'loans':'-',
  'flow':'-',
  // 'check':{
  //   1:'1',
  //   2:'2'
  // }
}

const contantFormat = {
  'id':0,
  'contantsType':'-',
  'contantsCompanyName':'-',
  'contantsFullname':'-',
  'contantsRole':'-',
  'contantsPhoneNumber':'-',
  'contantsMail':'-',
}
const operativeFormat = {
  'id':0,
  'operative-general':'-',
  'operative-details':'-',
  'operative-status':'-',
  'operative-date':'-',
  'operative-acceptance':'-',
  'operative-remarks':'-',
}
const financialFormat = {
  'id':0,
  'financial-general':'-',
  'financial-details':'-',
  'financial-message-payment':'-',
  'financial-payment':'-',
  'financial-date':'-',
  'financial-bankait':'-',
  'financial-Acceptance':'-',
  'financial-vat':'-',
  'financial-financial':'-',
  'financial-remarks':'-',
}

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {

  const classes = useStyles();
  const [asset , setAsset] = useState(assetFormat)

  const [contantObject, setContantObject] =useState(contantFormat)
  const [operativeObject, setOperativeObject] =useState(operativeFormat)
  const [financialObject, setFinancialObject] =useState(financialFormat)
  const [contants,setContants]= useState([])
  const [operatives,setOperatives]= useState([])
  const [financials,setFinancials]= useState([])
  
  const handleINCustomInput= (type,value)=>{
    const regexContant = new RegExp('contants')
    const regexOperative = new RegExp('operative')
    const regexFinancial= new RegExp('financial')
    
    if(regexContant.test(type)) {AddContants(type,value)}
    else if(regexOperative.test(type)) AddOperative(type,value)
    else if(regexFinancial.test(type)) AddFinancial(type,value)
    else AddAseet(type,value);
    
  }
  const [contant,setContant]=useState([<Contants pressAddContant={pressAddContant} send={handleINCustomInput} id={0}/>])
  const [operative,setOperative]=useState([<Operative send={handleINCustomInput} id={0}/>])
  const [financial,setFinancial]=useState([<Financial send={handleINCustomInput} id={0}/>])

  const AddAseet = (type,value) =>{
    console.log(type + ' '+ value)
    const object ={}
    object[type]=value
    setAsset({
      ...asset,
      ...object})
  }
  function AddContants(type,value){
    var num = type.charAt(type.length-1);
    var newType = type.replace(num,'')
    const object ={}
    object[newType]=value
    setContantObject(prev=>({...prev,id:num,...object}))
    }
  function AddOperative(type,value){
    var num = type.charAt(type.length-1);
    var newType = type.replace(num,'')
    const object ={}
    object[newType]=value
    setOperativeObject(prev=>({...prev,id:num,...object}))
    }
  function AddFinancial(type,value){
    var num = type.charAt(type.length-1);
    var newType = type.replace(num,'')
    const object ={}
    object[newType]=value
    setFinancialObject(prev=>({...prev,id:num,...object}))
    }
  
    const  pressAddContant = () =>{
      console.log(contantObject)
    setContants(prev=>([...prev,contantObject]))
   
  }
    const  pressAddOperative = () =>{
      console.log(contantObject)
    setOperatives(prev=>([...prev,operativeObject]))
   
  }
    const  pressAddFinancial = () =>{
      console.log(contantObject)
      setFinancials(prev=>([...prev,financialObject]))
   
  }

  const getTheNumber = ()=>{
    var number=0
    
      console.log('hi i am try')
        const assetRef = firebase.database().ref('assets')
        assetRef.on('value', (snapshot)=>{
          var assetdB= snapshot.val()
          try{
           
          number =assetdB.length}
          catch{number=0}
          console.log(number)
          console.log(assetdB)
    })
            return new Promise(resolve => {
          setTimeout(function() {
            console.log('i am promise 2')
            console.log(number)
          resolve(number)
        }, 1000)})

  }

  async function pushAseetsToDb(){
     const A = await orderAseets()
     const number = await getTheNumber()
     console.log('the number of pushDb:')
     console.log(number)
     

    firebase.database().ref(`assets/${number}`).set(
      {...asset, ...A[0],...A[1],...A[2]}
    );

}

const orderAseets= async()=>{
  var objectC={Contant:{}}
  var objectO={Operative:{}}
  var objectF={Financial:{}}

  contants.map((object,i)=>{
      objectC['Contant'][i]=object
  })
  operatives.map((object,i)=>{
      objectO['Operative'][i]=object
  })
  financials.map((object,i)=>{
      objectF['Financial'][i]=object
  })
  //  assetRef.on('value', (snapshot)=>{
  //   var assetdB= snapshot.val()
  //   try{
  //     console.log('hi i am try')
  //     var a= Object.getOwnPropertyNames(assetdB)
  //     number =a.length
  //    console.log(number)
  // }
  //   catch{
  //     console.log('hi i am catch')
  //     number=0
  //   }


  // }
  
  // )
  return new Promise(resolve => {
    setTimeout(function() {
      console.log('hi i am in the promise')
      resolve([objectC,objectO,objectF ])
      console.log("fast promise is done")
    }, 1000)
  })
 
}
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>הכנס נכס</h4>
              <p className={classes.cardCategoryWhite}>השלם את הפרטים במלואם!</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="תאריך קניה"
                    id="buy-date"
                
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      left:-1
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                    labelText="תאריך מסירה"
                    id="delivery-date"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                   send={handleINCustomInput}
                    labelText='פרוייקט'
                    id="project"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="בנק מלווה"
                    id="bank"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="יזם"
                    id="entrepreneur"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="קבלן"
                    id="contractor"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="עיר"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="כתובת"
                    id="adress"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="בניין"
                    id="building"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="קומה"
                    id="floor"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="מספר"
                    id="number"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="חדרים"
                    id="rooms"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="גודל(מ''ר)"
                    id="size(sqm)"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="מרפסת(מ''ר)"
                    id="terrace(sqm)"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="מחסן"
                    id="storage"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="חניות"
                    id="parking"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="מחיר קניה"
                    id="purchase-price"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="שווי נוכחי"
                    id="current-value"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="הלוואות"
                    id="loans"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="תזרים"
                    id="flow"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={pushAseetsToDb}>הוסף נכס</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>הכנס אנשי קשר</h4>
              <p className={classes.cardCategoryWhite}>השלם את הפרטים במלואם!</p>
            </CardHeader>
            <CardBody>

              {contants.length!=0?((
                contants.map((object,i)=>{return(

                  <Alert onClose={() => {console.log('hi')}}>{
                    
                    i+'->'+
                    'סוג:'+object.contantsType+' '+
                    'שם החברה:'+object.contantsCompanyName+' '+
                    'שם מלא:'+object.contantsFullname+' '+
                    'תפקיד:'+object.contantsRole+' '+
                    'טלפון:'+object.contantsPhoneNumber+' '+
                    'מייל:'+object.contantsMail+' '
                
                  }</Alert>
                )})
              )):''}
           
 
                  {contant.map((item, i)=>{
                    return(item)
                  })}

                    
            

            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={pressAddContant}>הוסף איש קשר נוסף</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>תפעולי  </h4>
              <p className={classes.cardCategoryWhite}>השלם את הפרטים במלואם!</p>
            </CardHeader>
            <CardBody>

            {operatives.length!=0?((
                operatives.map((object,i)=>{return(

                  <Alert onClose={() => {console.log('hi')}}>
                    {
                    
                    i+'->'+
                    'כללי:'+object['operative-general']+' '+
                    'פירוט:'+object["operative-details"]+' '+
                    'סטטוס:'+object["operative-status"]+' '+
                    'תאריך:'+object["operative-date"]+' '+
                    'ח.מס\קבלה:'+object["operative-acceptance"]+' '+
                    'הערות:'+object["operative-remarks"]+' '
  
                
                  }
                  </Alert>
                )})
              )):''}
            {operative.map((item, i)=>{
                    return(item)
                  })}


            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={pressAddOperative}> תפעולי הוסף</Button>
            
            </CardFooter>
            <CardFooter>
              <Button color="primary"> נכס</Button>
            
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>פיננסי</h4>
              <p className={classes.cardCategoryWhite}>השלם את הפרטים במלואם!</p>
            </CardHeader>
            <CardBody>

            {financials.length!=0?((
                financials.map((object,i)=>{return(

                  <Alert onClose={() => {console.log('hi')}}>{
                    
                    i+'->'+
                    'כללי:'+object['financial-general']+' '+
                    'פירוט:'+object['financial-details']+' '+
                    'הודעת תשלום:'+object['financial-message-payment']+' '+
                    'תשלום:'+object['financial-payment']+' '+
                    'תאריך:'+object['financial-date']+' '+
                    'ערבות בנקאית:'+object['financial-bankait']+' '+
                    'ח.מס\קבלה:'+object['financial-Acceptance']+' '+
                    "מע''מ:"+object['financial-vat']+' '+
                    "מתווה פיננסי:"+object['financial-financial']+' '+
                    "הערות:"+object['financial-remarks']+' '
                
                  }</Alert>
                )})
              )):''}
            {financial.map((item, i)=>{
                    return(item)
                  })}
            
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={pressAddFinancial}>הוסף פינססי</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
