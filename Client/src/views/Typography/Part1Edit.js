import React, { useEffect,useContext, useState,  useRef } from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import firebase from 'firebase'
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button.js";
import Alert from '@material-ui/lab/Alert';
import {Link} from 'react-scroll'
import DashData from '../../DashContent'
import { scroller } from "react-scroll";



export default function Part1Edit(props) {
  const [asset , setAsset] = useState({})
  const [alert , setAlert] = useState(0)
  const {store,setStore}=useContext(DashData)
  const section1Ref = useRef(null);
 
  const handleINCustomInput= (type,value)=>{
    const object ={}
    object[type]=value
    if(type=='current-value' ||type=='purchase-price' ||type=='flow'||type=='loans'||type=='insurance') object[type]=parseInt(value)
    setAsset({
      ...asset,
      ...object})
  }
  const updatePart1=()=>{
    setAlert(1)
    // scrollTo(section1Ref)
    firebase.database().ref(`assets/${store.allItems[props.id]}`).set(
      {...props.nis,...asset}
    );
    
  }
  const scrollToSection = () => {
    scroller.scrollTo(section1Ref, {
      duration: 800,
      delay: 0,
      smooth: "smooth",
    });
  };


    return(
      <GridContainer id="test">
      <Card ref={section1Ref}>
      <CardHeader id="test" color="rose">
        <h4 id="test">פרטים כלליים</h4>
      </CardHeader>
      
      </Card>
                <GridItem xs={12} sm={12} md={3} >
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
                      type:'date',
                      defaultValue:props.nis===undefined? '':props.nis["buy-date"],
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
                    inputProps={{
                      
                      defaultValue:props.nis===undefined? '':props.nis["delivery-date"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText='פרוייקט'
                    id="project"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["project"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                    labelText="בנק מלווה"
                    id="bank"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["bank"]
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="יזם"
                    id="entrepreneur"
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      defaultValue:props.nis===undefined? '':props.nis["entrepreneur"],
                      left:-1
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="קבלן"
                  id="contractor"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["contractor"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="עיר"
                  id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["city"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="כתובת"
                  id="adress"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["adress"]
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="בניין"
                    id="building"
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
          
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:props.nis===undefined? '':props.nis["building"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="קומה"
                  id="floor"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["floor"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="מספר"
                  id="number"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["number"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="חדרים"
                  id="rooms"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["rooms"]
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="גודל(מ''ר)"
                    id="size(sqm)"
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
          
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:props.nis===undefined? '':props.nis["size(sqm)"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="מרפסת(מ''ר)"
                    id="terrace(sqm)"
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
              
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:props.nis===undefined? '':props.nis["terrace(sqm)"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="מחסן"
                  id="storage"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["storage"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="חניות"
                  id="parking"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["parking"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="מחיר קניה"
                  id="purchase-price"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["purchase-price"]
                    }}
                  />
                </GridItem>
 
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="שווי נוכחי"
                    id="current-value"
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
              
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:props.nis===undefined? '':props.nis["current-value"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="עלות ביטוח"
                    id="insurance"
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
              
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:props.nis===undefined? '':props.nis["insurance"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="הלוואות"
                  id="loans"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["loans"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="תזרים"
                    id="flow"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["flow"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="רוחב"
                    id="x"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["x"]
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  send={handleINCustomInput}
                  labelText="אורך"
                    id="y"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:props.nis===undefined? '':props.nis["y"]
                    }}
                  />
                </GridItem>
                {alert?
                  <GridItem xs={12} sm={12} md={12}>
                    <Alert variant="outlined" severity="success">
                      הפריט עודכן בהצלחה
                    </Alert>
                    </GridItem>
                    :''}
                {/* <Button
                  fullWidth
                  color="info"
                  onclick={scrollToSection}
                
                >
                 עדכן
                </Button> */}
                <Button
                  fullWidth
                  color="info"
                  onClick={updatePart1}
                
                >
                 עדכן
                </Button>
                <Link activeClass="active"  to="test" spy={true} smooth={true}>Test</Link>
              </GridContainer>

  );
}
