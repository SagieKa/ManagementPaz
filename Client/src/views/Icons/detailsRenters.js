

import React,{useContext,useEffect,useState} from 'react'
import { Card, Feed } from 'semantic-ui-react'
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import DashData from '../../DashContent'
import Asset from '../Formats/rentersHe'
import { useHistory } from 'react-router-dom';

const styles = {
    header: {
      fontSize: "24px",
      marginBottom:'10px'
    },

  };
  
  const useStyles = makeStyles(styles);
  const item =(label,value)=>{
    console.log("here")
      return(
        <CustomInput
        labelText={label}
        // id="buy-date"
        formControlProps={{
            fullWidth: false,
            '&.MuiInputLabel-formControl': { 
                left:'-1',
            
              }
        }}
        labelProps={{shrink:true , left:'-1'}}
        inputProps={{
        //   type:'date',
          disabled: true,
          defaultValue:value
        }}
      />

      )

  }

function DetailsRenters(props){
    const classes = useStyles();
    const history = useHistory()
    const itemProps =(label,value) => item(label,String(value))
    const {store,setStore}=useContext(DashData)
    const [unit,setUnit]=useState({})
    const [assetFormat,SetAssetFormat]=useState(Asset)

    useEffect(() => {
      var item = history.location.pathname
      var lastChar = item.substr(item.length - 1);
        console.log(store.assets)
      var newUnit = store.assets[lastChar]
    try{
        console.log(unit)
        setUnit(newUnit['Renters'])}catch{}
    }, [])
  return(
  <Card>
    <Card.Content>
      <Card.Header
       className={classes.header}
       >פרטי  שוכרים </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>

          <Feed.Content>
            {
            Object.keys(unit).length==0?'':    
            unit.map((o,i)=>{
                o.id=i+1
             return Object.keys(o).map(function(key, index) {
                var str = String(o[key])
                console.log(assetFormat[key])
                if(index==0) return(<Feed.Date content={itemProps(assetFormat['id'],o.id)}/>)
                else if(key!='id')  return(<Feed.Date content={itemProps(assetFormat[key],str)}/>)
              })
            }) 
            }
          </Feed.Content>
        </Feed.Event>

      </Feed>
    </Card.Content>
  </Card>
  )
}

export default DetailsRenters