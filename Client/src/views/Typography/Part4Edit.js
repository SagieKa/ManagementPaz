import React , {useState} from "react";
import firebase from 'firebase'
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

export default function Part4Edit(props) {
  const id=props.id
  console.log(props.nis)
  const [asset , setAsset] = useState({})

  const handleINCustomInput= (type,value)=>{
    var num = type.charAt(type.length-1);
    var newType = type.replace(num,'')
    const object ={}
    object[newType]=value
    setAsset(prev=>{
        var newOne=prev
        newOne[num]={...newOne[num],...object}
        return newOne
    })}
    const updatePart4=()=>{
      Object.keys(asset).map(function(key, index) {
        // myObject[key] *= 2;
        firebase.database().ref(`assets/${props.id}/Financial/${key}`).set(
          {...props.nis[key],...asset[key]}
        );
      });
    }
    return(
      props.nis.map((n,i)=>{return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="כללי"
                    id={'financial-general'+i}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      defaultValue:n["financial-general"],
                      left:-1
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="פירוט"
                  id={"financial-details"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-details"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="הודעת תשלום"
                  id={"financial-message-payment"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-message-payment"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="תשלום"
                  id={"financial-payment"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-payment"],
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="תאריך"
                    id={"financial-date"+i}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:n["financial-date"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="ערבות בנקאית"
                  id={"financial-bankait"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-bankait"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="ח.מס\קבלה"
                  id={"financial-Acceptance"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-Acceptance"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="מע''מ"
                  id={"financial-vat"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-vat"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="מתווה פיננסי"
                  id={"financial-financial"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-financial"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="הערות רושמים כאן"
                  id={"financial-remarks"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-remarks"],
                    }}
                  />
                </GridItem>
                <Button
                  fullWidth
                  color="success"
                  onClick={updatePart4}
                >
                 עדכן
                </Button>
              </GridContainer>
    )})
  );
}
