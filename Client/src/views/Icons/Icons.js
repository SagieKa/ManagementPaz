/*eslint-disable*/
import React,{useContext} from "react";
// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import DashData from '../../DashContent'
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import Temp from './details'
import DetailsContant from './detailsContant'
import DetailsOperative from './detailsOperative'
import DetailsFinancial from './detailsFinancial'


const useStyles = makeStyles(styles);
export default function Icons() {
  const classes = useStyles();
  const {store,setStore}=useContext(DashData)
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>פרטים כלליים</h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
        
      <Temp num={0}/>
     
      </CardBody>
      </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>אנשי קשר</h4>
            </CardHeader>
            <CardBody>
        
      <DetailsContant num={9}/>
     
      </CardBody>
      </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>אנשי תפעול</h4>
            </CardHeader>
            <CardBody>
        
      <DetailsOperative num={9}/>
     
      </CardBody>
      </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose">
              <h4 className={classes.cardTitleWhite}>פיננסי</h4>
            </CardHeader>
            <CardBody className={classes.right}>
        
      <DetailsFinancial num={9}/>
     
      </CardBody>
      </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>פיננסי</h4>
            </CardHeader>
            <CardBody className={classes.right}>
        
      <DetailsFinancial num={9}/>
     
      </CardBody>
      </Card>
      </GridItem>
    </GridContainer>
  );
}
