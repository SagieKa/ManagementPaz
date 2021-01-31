/*eslint-disable*/
import React,{useContext, useEffect}  from "react";
// import Moment from 'react-moment';
import moment from 'moment'
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/core/Icon";
import MyResponsivePie from 'variables/chartVia'
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import DateRangeIcon from '@material-ui/icons/DateRange';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TodayIcon from '@material-ui/icons/Today';
import DashData from '../../DashContent'
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
// core components
import MergeTypeIcon from '@material-ui/icons/MergeType';
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import {
  primaryColor,
  whiteColor,
  primaryBoxShadow,
  defaultFont,
  blackColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,

} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";

import avatar from "assets/img/faces/marc.jpg";

let threeMount = [
  "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن؟",
  "	نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟",
  "همان حال کار آنها به نوعی وابسته به متن می‌باشد",
  "	آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند"
];
let mount = [
  "بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته",
  "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟"
];
let week = [
  "گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی؟",
  "از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی ؟",
  "از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟"
];

const useStyles = makeStyles(styles);

export default function RTLPage() {
  
  const classes = useStyles();
  const {store,setStore}=useContext(DashData)
  const viaData =[
    {
      "id": "נמכר",
      "label": "נמכר",
      "value":  store.statusSale,
      "color": "#fb9a99"
    },
    {
      "id": "לא מושכר",
      "label": "לא מושכר",
      "value": store.statusNoRent,
      "color": "hsl(80, 70%, 50%)" 
    },
    {
      "id":  "מושכר",
      "label": "מושכר",
      "value": store.statusRent,
      "color": "hsl(295, 70%, 50%)"
    },
    {
      "id": "בבניה",
      "label": "בבניה",
      "value": store.statusBuild,
      "color":"hsl(276, 70%, 50%)"
    },
  ]
  var m = moment("2021-03-01"); 
var today = moment().startOf('day');
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
              <HomeIcon/>
              </CardIcon>
              <p className={classes.cardCategory}>כמות נכסים</p>
              <h3 className={classes.cardTitle}>
                {store.countLength} <small></small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                 קבל יותר מקום {moment('20211031').startOf('day').fromNow()}

                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
                <PaymentIcon/>
              </CardIcon>
              <p className={classes.cardCategory}>עלות הנכסים</p>
              <h3 className={classes.cardTitle}>
              {store.purchasePrice.toLocaleString()}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                 קבל יותר מקום
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <AccountBalanceIcon />
              </CardIcon>
              <p className={classes.cardCategory}>שווי נכסים קיימים</p>
              <h3 className={classes.cardTitle}>{store.sumOfAssets.toLocaleString()}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                ב24 שעות
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>

        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <AccountBalanceWalletIcon/>
              </CardIcon>
              <p className={classes.cardCategory}>שווי נכסים שנמכרו</p>
              <h3 className={classes.cardTitle}>{store.priceOfSale.toLocaleString()}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
             תביא מGITHUB
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <MergeTypeIcon />
              </CardIcon>
              <p className={classes.cardCategory}>סך הלוואות</p>
              <h3 className={classes.cardTitle}>{store.loans.toLocaleString()}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>סך ביטוחים חודשי</p>
              <h3 className={classes.cardTitle}>
              {store.insurance.toLocaleString()}<small></small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                 קבל יותר מקום
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>

        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>סך שכירויות חודשי</p>
              <h3 className={classes.cardTitle}>{store.renterPrice.toLocaleString()}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                ב24 שעות
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>תזרים חודשי</p>
              <h3 className={classes.cardTitle}>{store.flow.toLocaleString()}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
             תביא מGITHUB
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>תזרים חודשי מהוון</p>
              <h3 className={classes.cardTitle}>{store.newFlow.toLocaleString()}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="warning">סטטוס נכסים
            </CardHeader>
            <CardBody>
               <MyResponsivePie data={viaData}/>
              {/* <h4 className={classes.cardTitle}>סטטוס נכסים</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
               עליה במכירות היומי
              </p> */}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime />במידה ואחת הרשומות יהיה 0 הוא לא יוצג
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="התראת תשלומים:"
            headerColor="primary"
            rtlActive
            tabs={[
              {
                tabName: "3 חודשים",
                tabIcon: DateRangeIcon,
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={[...store.num3Mount]}
                    tasks={store.pay3Mount}
                    rtlActive
                  />
                )
              },
              {
                tabName: "חודש",
                tabIcon: TodayIcon,
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={[...store.numMount]}
                    tasks={store.payMount}
                    rtlActive
                  />
                )
              },
              {
                tabName: "שבוע",
                tabIcon: CalendarTodayIcon,
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={[...store.numWeek]}
                    tasks={store.payWeek}
                    rtlActive
                  />
                )
              }
            ]}
          />
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>آمار کارکنان</h4>
              <p className={classes.cardCategoryWhite}>
                کارکنان جدید از ۱۵ آبان ۱۳۹۶
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["کد", "نام", "حقوق", "استان"]}
                tableData={[
                  ["1", "احمد حسینی	", "$36,738", "مازندران"],
                  ["2", "مینا رضایی	", "$23,789", "گلستان"],
                  ["3", "مبینا احمدپور	", "$56,142", "تهران"],
                  ["4", "جلال آقایی	", "$38,735", "شهرکرد"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>اعلان ها</h4>
              <p className={classes.cardCategoryWhite}>
                يدويا من قبل أصدقائنا من{" "}
                <a
                  target="_blank"
                  href="https://material-ui-next.com/?ref=creativetime"
                >
                  واجهة المستخدم المادية
                </a>{" "}
                ونصب من قبل{" "}
                <a
                  target="_blank"
                  href="https://www.creative-tim.com/?ref=mdr-rtl-page"
                >
                  الإبداعية تيم
                </a>
                . يرجى التحقق من{" "}
                <a href="#pablo" target="_blank">
                  وثائق كاملة
                </a>
                .
              </p>
            </CardHeader>
            <CardBody>
              <SnackbarContent
                message={
                  'این یک اعلان است که با کلاس color="warning" ایجاد شده است.'
                }
                close
                rtlActive
                color="warning"
              />
              <SnackbarContent
                message={
                  'این یک اعلان است که با کلاس color="primary" ایجاد شده است.'
                }
                close
                rtlActive
                color="primary"
              />
              <SnackbarContent
                message={"این یک اعلان با دکمه بستن و آیکن است"}
                close
                rtlActive
                color="info"
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>مدیرعامل / مدیرفنی</h6>
              <h4 className={classes.cardTitle}>خداداد عزیزی</h4>
              <p className={classes.description}>
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از
                متن‌های آزمایشی و بی‌معنی استفاده می‌کنند ...
              </p>
              <Button color="primary" round>
                دنبال‌کردن
              </Button>
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
