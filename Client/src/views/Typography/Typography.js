import React,{useContext, useEffect} from "react";
import firebase from 'firebase'
// @material-ui/core components
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Part1Edit from './Part1Edit'
import Part2Edit from './Part2Edit'
import Part3Edit from './Part3Edit'
import Part4Edit from './Part4Edit'
import Part5Edit from './Part5Edit'
import Done from './Done'
import Start from './Start'
import DashData from '../../DashContent'
import Contants from "views/UserProfile/contants";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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

export default function TypographyPage() {
  const {store,setStore}=useContext(DashData)
  const [steps,setSteps] = React.useState([ <Part1Edit /> , <Part2Edit id={1}/>, <Part3Edit id={1}/>,<Part4Edit id={1}/>,<Done/> ])
  const classes = useStyles();
  const theme = useTheme();
  const [numAssets,setNumAssets] = React.useState(0)
  const [activeStep, setActiveStep] = React.useState(0);
  useEffect(()=>{
    setSteps([
     <Start lis={lis} age={age} handleChange={handleChange}/>,
     <Part1Edit nis={store.assets[0]} id={0}/> , 
     <Part2Edit id={0} nis={store.assets.length==0? '':store.assets[0]['Contant']}/>,
      <Part3Edit id={0} nis={store.assets.length==0? '':store.assets[0]['Operative']}/>,
      <Part4Edit id={0} nis={store.assets.length==0? '':store.assets[0]['Financial']}/>,
      <Part5Edit id={0} nis={store.assets.length==0? '':store.assets[0]['Renter']}/>,
      <Done/> ])},[])
  useEffect(()=>{
        setNumAssets(store.assets.length)
  },[])
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    var changeStore=store.assets[event.target.value-1]
    var numID=event.target.value-1
    setAge(event.target.value)
    setStore(prev=>({
      ...prev ,
      numEdit:event.target.value-1,
  }))
  setSteps([ <Start/>,
  <Part1Edit nis={changeStore} id={numID}/> ,
  <Part2Edit id={numID} nis={changeStore['Contant']}/>,
  <Part3Edit id={numID} nis={changeStore['Operative']}/>,
  <Part4Edit id={numID} nis={changeStore['Financial']}/>,
  <Part5Edit id={numID} nis={changeStore['Renter']}/>,
  <Done/> ])
  };
  var lis = [];

for (var i=1; i<=numAssets; i++) {
    lis.push(<MenuItem value={i}>{i}</MenuItem>);
}
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>עריכת נכס ספציפי</h4>
        {activeStep==0?
               <p className={classes.cardCategoryWhite}>
               בחר את הנכס הרצוי
               <FormControl className={classes.formControl}>
             {/* <InputLabel id="demo-simple-select-label">מספר</InputLabel> */}
             <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={1}
               onChange={handleChange}
             >
               {lis}
             </Select>
           </FormControl>
             </p>
        :''}


      </CardHeader>
      <CardBody>
    {steps[activeStep]}
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          צעד הבא
          {theme.direction === 'rtl' ? <KeyboardArrowRight />:<KeyboardArrowLeft /> }
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ?  <KeyboardArrowLeft />:<KeyboardArrowRight /> }
          חזור אחורה
        </Button>
      }
    />

      </CardBody>
    </Card>
  );
}
