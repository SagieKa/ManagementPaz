import React,{useState} from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import firebase from 'firebase'
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

export default function Part2Edit(props) {

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
      const updatePart2=()=>{
        Object.keys(asset).map(function(key, index) {
          // myObject[key] *= 2;
          firebase.database().ref(`assets/${props.id}/Contant/${key}`).set(
            {...props.nis[key],...asset[key]}
          );
        });
        // firebase.database().ref(`assets/${props.id}/Contant`).set(
        //   {...props.nis,...asset}
        // );
        // console.log(asset)
        
      }
      

    return(

      props.nis.map((n,i)=>{return(
        <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        send={handleINCustomInput}
                        labelText="סוג"
                        id={"contantsType"+i}
                        formControlProps={{
                          fullWidth: true ,
                          "& .MuiInputLabel-formControl": {
                            left:'1'
                          }
                        }}
                        inputProps={{
                          disabled: false,
                          defaultValue:n["contantsType"],
                          left:-1
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                       send={handleINCustomInput}
                      labelText="שם החברה"
                      id={"contantsCompanyName"+i}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          defaultValue:n["contantsCompanyName"],
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                       send={handleINCustomInput}
                      labelText="שם מלא"
                      id={'contantsFullname'+i}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          defaultValue:n["contantsFullname"],
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                       send={handleINCustomInput}
                      labelText="תפקיד"
                      id={"contantsRole"+i}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          defaultValue:n["contantsRole"],
                        }}
                      />
                    </GridItem>
    
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        send={handleINCustomInput}
                        labelText="טלפון"
                        id={"contantsPhoneNumber"+i}
                        formControlProps={{
                          fullWidth: true ,
                          "& .MuiInputLabel-formControl": {
                            left:'1'
                          }
                        }}
                      
                        inputProps={{
                          disabled: false,
                          defaultValue:n["contantsPhoneNumber"],
                          left:-1
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={41}>
                      <CustomInput
                       send={handleINCustomInput}
                      labelText="מייל"
                      id={"contantsMail"+i}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          defaultValue:n["contantsMail"],
                        }}
                      />
                    </GridItem>
                    <Button
                      fullWidth
                      color="success"
                       onClick={updatePart2}
                    
                    >
                     עדכן
                    </Button>
                  </GridContainer>
      )})
       

    )

  
}
