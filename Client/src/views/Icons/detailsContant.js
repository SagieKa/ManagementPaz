

import React,{useContext,useEffect,useState} from 'react'
import { Card, Feed } from 'semantic-ui-react'
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import DashData from '../../DashContent'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Asset from '../Formats/contantHe'
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

function DetailsContant(props){
    const classes = useStyles();
    const history = useHistory()
    const itemProps =(label,value) => item(label,String(value))
    const {store,setStore}=useContext(DashData)
    const [unit,setUnit]=useState({})
    const [assetFormat,SetAssetFormat]=useState(Asset)

    useEffect(() => {
      var item = history.location.pathname
      var lastChar = item.substr(item.length - 1);
     console.log(lastChar)
      var newUnit = store.tableD[lastChar]
      console.log(newUnit)
    try{
      
        setUnit(newUnit['Contant'])}catch{}
    }, [])
  return(
    <GridContainer>
            {
            Object.keys(unit).length==0?'':    
            unit.map((o,i)=>{
                o.id=i+1
             return Object.keys(o).map(function(key, index) {
               console.log(o[key])
                var str = String(o[key])
                // (assetFormat[key])
                if(index==0) return(
                  <GridItem xs={12} sm={12} md={2}>

                    {itemProps(assetFormat['id'],o.id)}
                    {itemProps(assetFormat[key],str)}
                  </GridItem>
                )
                if(key!='id') return(
                  <GridItem xs={12} sm={12} md={2}>

                    {itemProps(assetFormat[key],str)}
                  </GridItem>
                  )
              })
            }) 
            }
</GridContainer>
  )
}

export default DetailsContant