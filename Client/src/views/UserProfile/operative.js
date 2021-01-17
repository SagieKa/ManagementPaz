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

export default function Operative(props){
    const id = props.id
    const send = props.send
   
    return(
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
           send={send}
            labelText="כללי"
            id={"operative-general"+id}
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
           send={send}
            labelText="פירוט"
            id={"operative-details"+id}
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
           send={send}
            labelText="סטטוס"
            id={"operative-status"+id}
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
           send={send}
            labelText="תאריך"
            id={"operative-date"+id}
            labelProps={{shrink:true}}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type:'date',
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
           send={send}
            labelText="ח.מס\קבלה"
            id={"operative-acceptance"+id}
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
           send={send}
            labelText="הערות"
            id={"operative-remarks"+id}
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
      </GridContainer>
    )
}