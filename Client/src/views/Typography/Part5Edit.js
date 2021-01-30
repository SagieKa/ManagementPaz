import React , {useState} from "react";
import firebase from 'firebase'
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
borderTop:'8px solid #bbb',
borderRadius:'5px'
  },
}));
export default function Part5Edit(props) {
  const classes = useStyles();
  const id=props.id
  console.log(props.nis)
  const [asset , setAsset] = useState({})
  const [alert , setAlert] = useState(0)

  const handleINCustomInput= (type,value)=>{
    var num = type.charAt(type.length-1);
    var newType = type.replace(num,'')
    const object ={}
    object[newType]=value
    if(newType =='renters-money'||newType =='renters-moneys') object[newType]=parseInt(value)
    setAsset(prev=>{
        var newOne=prev
        newOne[num]={...newOne[num],...object}
        return newOne
    })}
    const updatePart5=()=>{
      setAlert(1)
      Object.keys(asset).map(function(key, index) {
        // myObject[key] *= 2;
        firebase.database().ref(`assets/${props.id}/Renter/${key}`).set(
          {...props.nis[key],...asset[key]}
        );
      });
    }
    return(
      <GridContainer>
              <Card>
      <CardHeader color="rose">
        <h4 >פרטי שוכרים </h4>
      </CardHeader>
      
      </Card>
      {props.nis.map((n,i)=>{return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="מס"
                    id={'renters-count'+i}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      defaultValue:n["renters-count"],
                      left:-1
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="עיר"
                  id={"renters-city"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-city"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="שם הפרוייקט"
                  id={"renters-name-project"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-name-project"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="סטטוס"
                  id={"renters-status"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-status"],
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="תאריך התחלה"
                    id={"renters-first-date"+i}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                        type:'date',
                      disabled: false,
                      left:-1,
                      defaultValue:n["renters-first-date"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="תאריך גמר"
                  id={"renters-last-date"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-last-date"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                   labelText="שם-1"
                  id={"renters-name-one"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        
                      defaultValue:n["renters-name-one"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                   labelText="טלפון-1"
                  id={"renters-telephone-one"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-telephone-one"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                   labelText="שם-2"
                  id={"renters-name-two"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-name-two"],
                    }}
          
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                   labelText="טלפון-2"
                  id={"renters-telephone-two"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-telephone-two"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                   labelText="שכירות"
                    id={"renters-money"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-money"],
                      // type:'number',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                   labelText="חברת ניהול"
                  id={"renters-managment-name"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-managment-name"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                   labelText="מים"
                  id={"renters-water"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-water"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                   labelText="חשמל"
                  id={"renters-elec"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-elec"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                   labelText="עיירה"
                  id={"renters-Municipality"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["renters-Municipality"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Divider light={true} className={classes.root}/>
                    </GridItem>
 
              </GridContainer>
    )})}
                    {alert?
                  <GridItem xs={12} sm={12} md={12}>
                    <Alert variant="outlined" severity="success">
                      הפריט עודכן בהצלחה
                    </Alert>
                    </GridItem>
                    :''}
                <Button
                  fullWidth
                  color="success"
                  onClick={updatePart5}
                >
                 עדכן
                </Button>
    </GridContainer>
  );
}
