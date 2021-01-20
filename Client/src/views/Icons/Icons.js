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
      <GridItem xs={12} sm={12} md={1}/>
      <GridItem xs={12} sm={12} md={2}>
      <Temp num={0}/>
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
      <DetailsContant num={0}/>
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
      <DetailsOperative num={0}/>
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
      <DetailsFinancial num={0}/>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={2}>
      <Temp/>
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
      <Temp/>
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
      <Temp/>
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
      <Temp/>
      </GridItem> */}
      <GridItem xs={12} sm={12} md={1}/>
      {/* <GridItem xs={12} sm={12} md={3}>
      <Temp/>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
      <Temp/>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
      <Temp/>
      </GridItem> */}
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>
            <p className={classes.cardCategoryWhite}>
              Handcrafted by our friends from{" "}
              <a
                href="https://design.google.com/icons/?ref=creativetime"
                target="_blank"
              >
                Google
              </a>
            </p>
          </CardHeader>
          <CardBody>
            <Hidden only={["sm", "xs"]}>
              <iframe
                className={classes.iframe}
                src="https://goo.gl/maps/sfNjdanafdtip6zb9"
                title="Icons iframe"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
            <Hidden only={["lg", "md"]}>
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  The icons are visible on Desktop mode inside an iframe. Since
                  the iframe is not working on Mobile and Tablets please visit
                  the icons on their original page on Google. Check the
                  <a
                    href="https://design.google.com/icons/?ref=creativetime"
                    target="_blank"
                  >
                    Material Icons
                  </a>
                </h5>
              </GridItem>
            </Hidden>
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer>
  );
}
