import React, { useEffect,useContext, useState } from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import firebase from 'firebase'
import DashData from '../../DashContent'
import Asset from '../Formats/assetFormat'
import Button from "components/CustomButtons/Button.js";

export default function Part1Edit(props) {
  // const {store,setStore}=useContext(DashData)
  // const [object,setObject]=useState(Asset)
  
  // const [edit,setEdit]=React.useState(props.num)
  const [asset , setAsset] = useState({})
  console.log(props.nis)
  const handleINCustomInput= (type,value)=>{
    const object ={}
    object[type]=value
    setAsset({
      ...asset,
      ...object})
  }
  const updatePart1=()=>{
    firebase.database().ref(`assets/${props.id}`).set(
      {...props.nis,...asset}
    );
    
  }

    return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
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
                      // type:'date',
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
                <Button
                  fullWidth
                  color="success"
                  onClick={updatePart1}
                // }
                >
                 עדכן
                </Button>
              </GridContainer>

  );
}
