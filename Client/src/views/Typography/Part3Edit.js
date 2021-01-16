import React ,{useState} from "react";
import firebase from 'firebase'
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

export default function Part3Edit(props) {

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
    const updatePart3=()=>{
      Object.keys(asset).map(function(key, index) {
        // myObject[key] *= 2;
        firebase.database().ref(`assets/${props.id}/Operative/${key}`).set(
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
                    id={"operative-general"+i}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:n["operative-general"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="פירוט"
                  id={"operative-details"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["operative-details"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="סטטוס"
                  id={"operative-status"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["operative-status"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="תאריך"
                  id={"operative-date"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["operative-date"],
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="ח.מס\קבלה"
                    id={"operative-acceptance"+i}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:n["operative-acceptance"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="הערות"
                  id={"operative-remarks"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["operative-remarks"],
                    }}
                  />
                </GridItem>
                <Button
                  fullWidth
                  color="success"
                  onClick={updatePart3}
                >
                 עדכן
                </Button>
              </GridContainer>
 )})
  );
}
