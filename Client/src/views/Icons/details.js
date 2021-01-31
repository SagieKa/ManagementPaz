

import React,{useContext,useEffect,useState} from 'react'
import { Card, Feed } from 'semantic-ui-react'
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import DashData from '../../DashContent'
import Asset from '../Formats/assetHe'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { useHistory } from 'react-router-dom';

const styles = {
    header: {

      fontSize: "24px",
      marginBottom:'10px'
    },

  };
  
  const useStyles = makeStyles(styles);
  const item =(label,value)=>{

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

function Temp(props){
  const history = useHistory()

    const classes = useStyles();
    const itemProps =(label,value) => item(label,String(value))
    const {store,setStore}=useContext(DashData)
    const [unit,setUnit]=useState({})
    const [assetFormat,SetAssetFormat]=useState(Asset)

   
    useEffect(() => {
      var item = history.location.pathname
      var lastChar = item.substr(item.length - 1);
      console.log(lastChar)
      var unit = Object.assign({}, store.tableD[lastChar]);
      console.log(unit)
      
      
      try{
      delete unit.Contant
      delete unit.Financial
      delete unit.Operative
      delete unit.Renter
      setUnit(unit)
      }catch{}
    }, [])
  return(
  
          <GridContainer>

              {
              Object.keys(unit).map(function(key, index) {
                var str = String(unit[key])
                if(key!='id') return(
                  <GridItem xs={12} sm={12} md={2}>
                      {itemProps(assetFormat[key],str)}
                  </GridItem> 
               
                
                )
              })
              
            }

    
    </GridContainer>
  )
}

export default Temp