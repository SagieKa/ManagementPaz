import React , {useState,useContext} from "react";
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
import DashData from '../../DashContent'

const useStyles = makeStyles((theme) => ({
  root: {
borderTop:'8px solid #bbb',
borderRadius:'5px'
  },
}));
export default function Part4Edit(props) {
  const [alert , setAlert] = useState(0)
  const {store,setStore}=useContext(DashData)
  const classes = useStyles();
  const id=props.id

  const [asset , setAsset] = useState({})

  const handleINCustomInput= (type,value)=>{
    var num = type.charAt(type.length-1);
    var newType = type.replace(num,'')
    const object ={}
    object[newType]=value
    if(newType=='financial-payment' || newType=='financial-vat') object[newType]=parseInt(value)
    setAsset(prev=>{
        var newOne=prev
        newOne[num]={...newOne[num],...object}
        return newOne
    })}
    const updatePart4=()=>{
      setAlert(1)
      Object.keys(asset).map(function(key, index) {
        // myObject[key] *= 2;
        firebase.database().ref(`assets/${store.allItems[props.id]}/Financial/${key}`).set(
          {...props.nis[key],...asset[key]}
        );
      });
    }
    return(
      <GridContainer>
                      <Card>
      <CardHeader color="rose">
        <h4 >פרטים פיננסים </h4>
      </CardHeader>
      
      </Card>
      {props.nis.map((n,i)=>{return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="כללי"
                    id={'financial-general'+i}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      defaultValue:n["financial-general"],
                      left:-1
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="פירוט"
                  id={"financial-details"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-details"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="הודעת תשלום"
                  id={"financial-message-payment"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-message-payment"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="תשלום"
                  id={"financial-payment"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-payment"],
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="תאריך"
                    id={"financial-date"+i}
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
                      defaultValue:n["financial-date"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="ערבות בנקאית"
                  id={"financial-bankait"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-bankait"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="ח.מס\קבלה"
                  id={"financial-Acceptance"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-Acceptance"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="מע''מ"
                  id={"financial-vat"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-vat"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="מתווה פיננסי"
                  id={"financial-financial"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-financial"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="הערות רושמים כאן"
                  id={"financial-remarks"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["financial-remarks"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Divider light={true} className={classes.root} />
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
                  onClick={updatePart4}
                >
                 עדכן
                </Button>
    </GridContainer>
  );
}
