import React ,{useState,useContext} from "react";
import firebase from 'firebase'
import { makeStyles } from '@material-ui/core/styles';
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Divider from '@material-ui/core/Divider';
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


export default function Part3Edit(props) {
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
    setAsset(prev=>{
        var newOne=prev
        newOne[num]={...newOne[num],...object}
        return newOne
    })}
    const updatePart3=()=>{
      setAlert(1)
      Object.keys(asset).map(function(key, index) {
        // myObject[key] *= 2;
        firebase.database().ref(`assets/${store.allItems[props.id]}/Operative/${key}`).set(
          {...props.nis[key],...asset[key]}
        );
      });
    }
    return(
      <GridContainer>
                              <Card>
      <CardHeader color="rose">
        <h4 >פרטים תפעוליים </h4>
      </CardHeader>
      
      </Card>
      {props.nis.map((n,i)=>{return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        send={handleINCustomInput}
                        labelText="רשומה"
                        id={"contantsType"+i}
                        formControlProps={{
                          fullWidth: true ,
                          "& .MuiInputLabel-formControl": {
                            left:'1'
                          }
                        }}
                        inputProps={{
                          disabled: true,
                          defaultValue:i+1,
                          left:-1
                        }}
                      />
                    </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="כללי"
                    id={"operative-general"+i}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:n["operative-general"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="פירוט"
                  id={"operative-details"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["operative-details"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="סטטוס"
                  id={"operative-status"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["operative-status"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="תאריך"
                  id={"operative-date"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type:'date',
                      defaultValue:n["operative-date"],
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    send={handleINCustomInput}
                    labelText="ח.מס\קבלה"
                    id={"operative-acceptance"+i}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      left:-1,
                      defaultValue:n["operative-acceptance"],
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                   send={handleINCustomInput}
                  labelText="הערות"
                  id={"operative-remarks"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["operative-remarks"],
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
                  onClick={updatePart3}
                >
                 עדכן
                </Button>
 </GridContainer>
  );
}
