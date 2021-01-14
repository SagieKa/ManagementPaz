import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import firebase from '../../utils/firebase'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [TableDate,setTableDate]= useState([])
  useEffect(()=>{
    const assetRef = firebase.database().ref('assets')
    console.log(assetRef)
    assetRef.on('value', (snapshot)=>{
      console.log(snapshot.length)
      var asset=snapshot.val()
      console.log(asset)
      asset.map((o,i)=>{
        console.log(o.entrepreneur)
        setTableDate(prev=>[...prev ,
          [asset[i]['buy-date'],
          asset[i]['delivery-date'],
          asset[i]['project'],
          asset[i]['bank'],
          asset[i]['entrepreneur'],
          asset[i]['contractor'],
          asset[i]['city'],
          asset[i]['adress'],
          asset[i]['building'],
          asset[i]['floor'],
          asset[i]['number'],
          asset[i]['rooms'],
          asset[i]['size(sqm)'],
          asset[i]['terrace(sqm)'],
          asset[i]['storage'],
          asset[i]['parking'],
          asset[i]['purchase-price'],
          asset[i]['current-value'],
          asset[i]['loans'],
          asset[i]['flow']]
          
         
         ])
      })
    //   setTableDate([...TableDate ,
    //      asset['buy-date'],
    //      asset['delivery-date'],
    //      asset['project'],
    //      asset['bank'],
    //      asset['entrepreneur'],
    //      asset['contractor'],
    //      asset['city'],
    //      asset['adress'],
    //      asset['building'],
    //      asset['floor'],
    //      asset['number'],
    //      asset['rooms'],
    //      asset['size(sqm)'],
    //      asset['terrace(sqm)'],
    //      asset['storage'],
    //      asset['parking'],
    //      asset['purchase-price'],
    //      asset['current-value'],
    //      asset['loans'],
    //      asset['flow'],
         
        
    //     ])
      
    })
  },[])
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>טבלה מספר אחת</h4>
            <p className={classes.cardCategoryWhite}>
             טבלה תיאור הנכסים
            </p>
          </CardHeader>
          <CardBody>
            <Table 
              tableHeaderColor="primary"
              tableHead={["תאריך קניה", "תאריך מסירה", "פרוייקט", "בנק מלווה" ,"יזם","קבלן","עיר","כתובת","בניין","קומה","מספר","חדרים","גודל(מ''ר)","מרפסת(מ''ר)","מחסן","חניות","מחיר קניה","שווי נוכחי","הלוואות","תזרים"]}
              tableData={[...TableDate]}
              // tableData={[
              //   ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
              //   ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
              //   ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
              //   ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
              //   ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
              //   ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              // ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              טבלת שוכרים
            </h4>
            <p className={classes.cardCategoryWhite}>
              פה נראה את סדר השוכרים הכרנולוגי
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["תאריך קניה", "תאריך מסירה", "פרוייקט", "בנק מלווה" ,"יזם","קבלן","עיר","כתובת","בניין","קומה","מספר","חדרים","גודל(מ''ר)","מרפסת(מ''ר)","מחסן","חניות","מחיר קניה","שווי נוכחי","הלוואות","תזרים"]}
              // tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[...TableDate]}
              // tableData={[
              //   ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
              //   ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
              //   ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
              //   [
              //     "4",
              //     "Philip Chaney",
              //     "$38,735",
              //     "Korea, South",
              //     "Overland Park"
              //   ],
              //   [
              //     "5",
              //     "Doris Greene",
              //     "$63,542",
              //     "Malawi",
              //     "Feldkirchen in Kärnten"
              //   ],
              //   ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              // ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
