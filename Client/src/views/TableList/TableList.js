import React, { useEffect, useContext,useState } from "react";
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
import DashData from '../../DashContent'
import TableMaterial from './MaterialTable'

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
  const {store,setStore}=useContext(DashData)
  const [TableDate,setTableDate]= useState([])
  useEffect(()=>{
    store.assets.map((o,i)=>{
      console.log(o['buy-date'])
        setTableDate(prev=>[...prev ,
          [o['buy-date'],
          o['delivery-date'],
          o['project'],
          o['bank'],
          o['entrepreneur'],
          o['contractor'],
          o['city'],
          o['adress'],
          o['building'],
          o['floor'],
          o['number'],
          o['rooms'],
          o['size(sqm)'],
          o['terrace(sqm)'],
          o['storage'],
          o['parking'],
          o['purchase-price'],
          o['current-value'],
          o['loans'],
          o['flow']],
         
         ])
      })
  console.log('the table data:')
  console.log(TableDate)
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

        <TableMaterial TableDate={TableDate}/>
          </CardBody>
          </Card>
          
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={12}>
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
      </GridItem> */}

    </GridContainer>
  );
}
