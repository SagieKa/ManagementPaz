import React from "react";
import firebase from  '../../utils/firebase'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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
  'buy-date':'',
  'delivery-date':'',
  'project':'',
  'bank':'',
  'entrepreneur':'',
  'city':'',
  'adress':'',
  'building':'',
  'floor':'',
  'number':'',
  'rooms':'',
  'size(sqm)':'',
  'terrace(sqm)':'',
  'storage':'',
  'parking':'',
  'purchase-price':'',
  'current-value':'',
  'loans':'',
  'flow':'',
  'check':{
    1:'1',
    2:'2'
  }
}

const contantFormat = {
  'id':0,
  'contants-type':'',
  'contants-company-name':'',
  'contants-fullname':'',
  'contants-role':'',
  'contants-phone-number':'',
  'contants-mail':'',
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
  const {store,setStore}=useContext(DashData)
  console.log(store)
  const classes = useStyles();
  const [asset , setAsset] = useState(assetFormat)
  
  const [contantObject, setContantObject] =useState(contantFormat)
  const [contants,setContants]= useState({0:{...contantFormat}})
  const [operativeObject, setOperativeObject] =useState('')
  const [financialObject, setFinancialObject] =useState('')
  
  const [contantNum,setContantNum]=useState(1)
  const [operativeNum,setOperativeNum]=useState(1)
  const [financialNum,setFinancialNum]=useState(1)
  
  const handleINCustomInput= (type,value,)=>{
    const regexContant = new RegExp('contants')
    const regexOperative = new RegExp('operative')
    const regexFinancial= new RegExp('financial')
    console.log('the vlaue:')
    console.log(contants)
    if(regexContant.test(type)) AddContants(type,value,contants)
    if(regexOperative.test(type)) console.log('sucsess')
    if(regexFinancial.test(type)) console.log('sucsess')
    else AddAseet(type,value);
    
  }
  const [contant,setContant]=useState([<Contants send={handleINCustomInput} id={0}/>])
  const [operative,setOperative]=useState([<Operative send={handleINCustomInput} id={0}/>])
  const [financial,setFinancial]=useState([<Financial send={handleINCustomInput} id={0}/>])

  const addContant =()=>{
    var num = contantNum
    var newcontants = {...contants}
    newcontants[num] = {...contantFormat}
    setContants(newcontants)
    setContant([...contant,<Contants send={handleINCustomInput} id={contantNum}/>])
    setContantNum(num+1)
    
  }
  const addOperative =()=>{
    var num = operativeNum
    setOperative([...operative,<Operative send={handleINCustomInput} id={operativeNum}/>])
    setOperativeNum(num+1)
  }
  const addFinancial =()=>{
    var num = financialNum
    setFinancial([...financial,<Financial send={handleINCustomInput} id={financialNum}/>])
    setFinancialNum(num+1)
  }

  const AddAseet = (type,value) =>{
    const object ={}
    object[type]=value
    setAsset({
      ...asset,
      ...object})
  }
  function AddContants(type,value,con){
    console.log(contants)
    var num = type.charAt(type.length-1);
    var newType = type.replace(num,'')
    const object ={}
    object[newType]=value
    // console.log(contants)
    var prevArr = {...contants}
    // console.log(prevArr)
    // // console.log(prevArr)
    prevArr[num][newType]=value
    // console.log(prevArr)
    setContants(prevArr)

    }
  
  
  const pushAseetsToDb=()=>{
    console.log(asset)
    console.log(contants)
    firebase.database().ref('assets/asset').set(
      asset
    );
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
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="בנק מלווה"
                    id="bank"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="יזם"
                    id="entrepreneur"
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

                  {contant.map((item, i)=>{
                    return(item)
                  })}

                    
            

            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={addContant}>הוסף איש קשר נוסף</Button>
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

            {operative.map((item, i)=>{
                    return(item)
                  })}


            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={addOperative}> תפעולי הוסף</Button>
            
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

            {financial.map((item, i)=>{
                    return(item)
                  })}
            
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={addFinancial}>הוסף פינססי</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
