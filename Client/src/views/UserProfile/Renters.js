import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { useState } from "react";

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

export default function Renters1(props){
    const id = props.id
    const send = props.send
    return(
        <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="מס"
                    id={'renters-count'+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="עיר"
                    id={"renters-city"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="שם הפרוייקט"
                    id={"renters-name-project"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="סטטוס"
                    id={"renters-status"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="תאריך התחלה"
                    id={"renters-first-date"+id}
                    formControlProps={{
                      fullWidth: true,
                    //   MuiInputLabel-shrink
                    }}
                    inputProps={{
                        type:'date',
                        
                        defaultValue:''
                      }}
                      labelProps={{shrink:true}}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="תאריך גמר"
                    id={"renters-last-date"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                    labelProps={{shrink:true}}
                    inputProps={{
                        type:'date',
                      }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="שם-1"
                    id={"renters-name-one"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="טלפון-1"
                    id={"renters-telephone-one"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="שם-2"
                    id={"renters-name-two"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="טלפון-2"
                    id={"renters-telephone-two"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="שכירות"
                    id={"renters-money"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="חברת ניהול"
                    id={"renters-managment-name"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="מים"
                    id={"renters-water"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="חשמל"
                    id={"renters-elec"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="עיירה"
                    id={"renters-Municipality"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              

              </GridContainer>
    )
}