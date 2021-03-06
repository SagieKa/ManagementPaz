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
import CustomSelect from "components/CustomInput/CustomSelect";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useState,useContext } from "react";
import Contants from './contants'
import DashData from '../../DashContent'
import Operative from './operative'
import Financial from './financial'
import Renters  from './Renters'

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Asset from '../Formats/assetFormat'
import { CropLandscapeOutlined } from "@material-ui/icons";
const assetFormat = Asset

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
const renterFormat = {
  'id':0,
  'renters-count':'-',
  'renters-city':'-',
  'renters-name-project':'-',
  'renters-status':'-',
  'renters-first-date':'-',
  'renters-last-date':'-',
  'renters-name-one':'-',
  '"renters-telephone-one':'-',
  'renters-name-two':'-',
  'renters-telephone-two':'-',
  'renters-moneys':'-',
  'renters-managment-name':'-',
  'renters-water':'-',
  'renters-elec':'-',
  'renters-Municipality':'-',
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
  const {store,setStore}=useContext(DashData)
  const [contantObject, setContantObject] =useState(contantFormat)
  const [operativeObject, setOperativeObject] =useState(operativeFormat)
  const [financialObject, setFinancialObject] =useState(financialFormat)
  const [renterObject, setRenterObject] =useState(renterFormat)
  const [contants,setContants]= useState([])
  const [operatives,setOperatives]= useState([])
  const [financials,setFinancials]= useState([])
  const [renters,setRenters]= useState([])
  
  const handleINCustomInput= (type,value)=>{
  
    const regexContant = new RegExp('contants')
    const regexOperative = new RegExp('operative')
    const regexFinancial= new RegExp('financial')
    const regexRenter= new RegExp('renters')
    
    if(regexContant.test(type)) {AddContants(type,value)}
    else if(regexOperative.test(type)) AddOperative(type,value)
    else if(regexFinancial.test(type)) AddFinancial(type,value)
    else if(regexRenter.test(type)) AddRenter(type,value)
    else AddAseet(type,value);
    
  }
  const [contant,setContant]=useState([<Contants pressAddContant={pressAddContant} send={handleINCustomInput} id={0}/>])
  const [operative,setOperative]=useState([<Operative send={handleINCustomInput} id={0}/>])
  const [financial,setFinancial]=useState([<Financial send={handleINCustomInput} id={0}/>])
  const [renter,setRenter]=useState([<Renters send={handleINCustomInput} id={0}/>])

  const AddAseet = (type,value) =>{
  
    const object ={}
    object[type]=value
    if(type=='current-value' ||type=='purchase-price' ||type=='flow'||type=='loans'||type=='insurance') object[type]=parseInt(value)
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
    if(newType=='financial-payment' || newType=='financial-vat') object[newType]=parseInt(value)
    setFinancialObject(prev=>({...prev,id:num,...object}))
    }

    const onCloseContants= (i)=>{
     
        let arr = [...contants]
        arr.splice(i,1);
        setContants(arr)
    }
    const onCloseOperative= (i)=>{
    
        let arr = [...operatives]
        arr.splice(i,1);
        setOperatives(arr)
    }
    const onCloseFinancial= (i)=>{
    
        let arr = [...financials]
        arr.splice(i,1);
        setFinancials(arr)
    }
    const onCloseRenter= (i)=>{
     
        let arr = [...renters]
        arr.splice(i,1);
        setRenters(arr)
    }
  
  function AddRenter(type,value){
    var num = type.charAt(type.length-1);
    var newType = type.replace(num,'')
    const object ={}
    object[newType]=value
    if(newType =='renters-money') object[newType]=parseInt(value)
    setRenterObject(prev=>({...prev,id:num,...object}))
    }
  
    const  pressAddContant = () =>{
     
    setContants(prev=>([...prev,contantObject]))
   
  }
    const  pressAddOperative = () =>{
     
    setOperatives(prev=>([...prev,operativeObject]))
   
  }
    const  pressAddFinancial = () =>{
      
      setFinancials(prev=>([...prev,financialObject]))
   
  }
    const  pressAddRenters = () =>{
     
      setRenters(prev=>([...prev,renterObject]))
   
  }

  const getTheNumber = ()=>{
    var number=1
    var arr = store.allItems
    console.log(arr)
    var last = arr.slice(-1)[0]
    console.log(last)
    console.log(last+1)
    number=last +1
      
        
        console.log(number)
            return new Promise(resolve => {
          setTimeout(function() {
 
          resolve(number)
        }, 1000)})

  }

  async function pushAseetsToDb(){
     const A = await orderAseets()
     const number = await getTheNumber()

     

    firebase.database().ref(`assets/${number}`).set(
      {...asset, ...A[0],...A[1],...A[2],...A[3]}
    );

}

const orderAseets= async()=>{
  var objectC={Contant:{}}
  var objectO={Operative:{}}
  var objectF={Financial:{}}
  var objectR={Renter:{}}

  contants.map((object,i)=>{
      objectC['Contant'][i]=object
  })
  operatives.map((object,i)=>{
      objectO['Operative'][i]=object
  })
  financials.map((object,i)=>{
      objectF['Financial'][i]=object
  })
  renters.map((object,i)=>{
      objectR['Renter'][i]=object
  })

  return new Promise(resolve => {
    setTimeout(function() {
      
      resolve([objectC,objectO,objectF,objectR ])
    
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
                    inputProps

                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1',
                        // shrink: true,
                      }
                    }}
                    labelProps={{shrink:true}}
                    //   shrink: false,
                     
                    // }}
            
                    inputProps={{
                      type:'date',
                      disabled: false,
                      
                      left:-1
                    }}
                  />
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                    labelText="תאריך מסירה"
                    id="delivery-date"
                    labelProps={{shrink:true}}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:'date',
                    }}
                  />
                </GridItem> */}
                <GridItem xs={12} sm={12} md={3}>
                <CustomSelect
                   send={handleINCustomInput}
                    data={['בניה','מושכר','לא מושכר','נמכר']}
                    labelText="תאריך מסירה"
                    id="delivery-date"
                    labelProps={{shrink:true}}
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
                    inputProps={{
                      type:'number',
                      disabled: false,
                      
                      left:-1
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
                    inputProps={{
                      type:'number',
                      disabled: false,
                      
                      left:-1
                    }}
                  />
                    </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="עלות ביטוח"
                    id="insurance"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:'number',
                      disabled: false,
                      
                      left:-1
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
                    inputProps={{
                      type:'number',
                      disabled: false,
                      
                      left:-1
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
                    inputProps={{
                      type:'number',
                      disabled: false,
                      
                      left:-1
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="אורך"
                    id="x"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="רוחב"
                    id="y"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

              </GridContainer>

            </CardBody>
            {/* <CardFooter>
              <Button color="primary" onClick={pushAseetsToDb}>הוסף נכס</Button>
            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>הכנס אנשי קשר</h4>
              <p className={classes.cardCategoryWhite}>לחץ על הוסף על מנת להוסיף איש קשר</p>
            </CardHeader>
            <CardBody>

              {contants.length!=0?((
                contants.map((object,i)=>{return(

                  <Alert onClose={() => {onCloseContants(i)}}>{
                    
                    `${i+1}`+')'+
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
              <Button color="primary" onClick={pressAddContant}>הוסף איש קשר</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>תפעולי  </h4>
              <p className={classes.cardCategoryWhite}>לחץ על הוסף על מנת להוסיף איש תפעולי</p>
            </CardHeader>
            <CardBody>

            {operatives.length!=0?((
                operatives.map((object,i)=>{return(

                  <Alert onClose={() => {onCloseOperative(i)}}>
                    {
                    
                    `${i+1}`+')'+
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
              <Button color="primary" onClick={pressAddOperative}> הוסף תפעולי </Button>
            
            </CardFooter>
            {/* <CardFooter>
              <Button color="primary"> נכס</Button>
            
            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>פיננסי</h4>
              <p className={classes.cardCategoryWhite}>לחץ על הוסף על מנת להוסיף איש פיננסי</p>
            </CardHeader>
            <CardBody>

            {financials.length!=0?((
                financials.map((object,i)=>{return(

                  <Alert onClose={() => {onCloseFinancial(i)}}>{
                    
                    `${i+1}`+')'+
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>שוכרים</h4>
              <p className={classes.cardCategoryWhite}>לחץ על הוסף על מנת להוסיף שוכר </p>
            </CardHeader>
            <CardBody>

            {renters.length!=0?((
                renters.map((object,i)=>{return(

                  <Alert onClose={() => {onCloseRenter(i)}}>{
                    
                    `${i+1}`+')'+
                    'מס:'+object['renters-count']+' '+
                    'עיר:'+object['renters-city']+' '+
                    ":שם הפרוייקט"+object['renters-name-project']+' '+
                    'סטטוס:'+object['renters-status']+' '+
                    'תאריך התחלה:'+object['renters-first-date']+' '+
                    'תאריך גמר:'+object['renters-last-date']+' '+
                    'שם-1:'+object['renters-name-one']+' '+
                    "טלפון-1:"+object['renters-telephone-one']+' '+
                    "שם-2:"+object['renters-name-two']+' '+
                    "טלפון-2:"+object['renters-telephone-two']+' '+
                    "שכירות:"+object['renters-money']+' '+
                    "חברת ניהול:"+object['renters-managment-name']+' '+
                    "מים:"+object['renters-water']+' '+
                    "חשמל:"+object['renters-elec']+' '+
                    "עיירה:"+object['renters-Municipality']+' '
                
                  }</Alert>
                )})
              )):''}
            {renter.map((item, i)=>{
                    return(item)
                  })}
            
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={pressAddRenters}>הוסף פינססי</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
        <Button color="info" onClick={pushAseetsToDb} fullWidth>הוסף נכס</Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
