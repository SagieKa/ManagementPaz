

import React,{useContext,useEffect,useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import DashData from '../../DashContent'
import Asset from '../Formats/operativeHe'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { useHistory } from 'react-router-dom';
  ;
  const item =(label,value)=>{
  
      return(
        <GridItem xs={12} sm={12} md={2}>
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
      /></GridItem>

      )

  }

function DetailsOperative(props){
  const history = useHistory()
    const itemProps =(label,value) => item(label,String(value))
    const {store,setStore}=useContext(DashData)
    const [unit,setUnit]=useState({})
    const [assetFormat,SetAssetFormat]=useState(Asset)

    useEffect(() => {
      var item = history.location.pathname
      var lastChar = item.substr(item.length - 1);
        
      var newUnit = store.tableD[lastChar]
    try{
       
        setUnit(newUnit['Operative'])}catch{}
    }, [])
    return(
      

                  
                  Object.keys(unit).length==0?'':    
                  unit.map((o,i)=>{
                      o.id=i+1
                   return(   <GridContainer > {Object.keys(o).map(function(key, index) {
                      var str = String(o[key])
                     
                       return(
                      
                          itemProps(assetFormat[key],str)
                         
                        )
                    })} </GridContainer> )
                  }) 
                  

        )
      }

export default DetailsOperative