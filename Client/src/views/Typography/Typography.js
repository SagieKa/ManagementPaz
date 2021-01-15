import React from "react";
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
import Done from './Done'

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
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [steps,setSteps] = React.useState([ <Part1Edit/> , <Part2Edit id={1}/>, <Part3Edit id={1}/>,<Part4Edit id={1}/>,<Done/> ])
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>עריכת נכס ספציפי</h4>
        <p className={classes.cardCategoryWhite}>
          בחר את הנכס הרצוי
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">מספר</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </p>
      </CardHeader>
      <CardBody>
    {steps[activeStep]}
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep+1}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
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
