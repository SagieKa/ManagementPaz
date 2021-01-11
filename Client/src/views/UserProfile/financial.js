import React from "react";
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

export default function Financial(props){
    const id = props.id
        
    const send = props.send
    return(
        <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="כללי"
                    id={'financial-general'+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="פירוט"
                    id={"financial-details"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="הודעת תשלום"
                    id={"financial-message-payment"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="תשלום"
                    id={"financial-payment"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="תאריך"
                    id={"financial-date"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="ערבות בנקאית"
                    id={"financial-bankait"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="ח.מס\קבלה"
                    id={"financial-Acceptance"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="מע''מ"
                    id={"financial-vat"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  send={send}
                    labelText="מתווה פיננסי"
                    id={"financial-financial"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              
                <GridItem xs={12} sm={12} md={12}>
                
                  <CustomInput
                  send={send}
                    labelText="הערות רושמים כאן"
                    id={"financial-remarks"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 1
                    }}
                  />
                </GridItem>
              </GridContainer>
    )
}