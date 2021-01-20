

import React,{useContext,useEffect,useState} from 'react'
import { Card, Feed } from 'semantic-ui-react'
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import DashData from '../../DashContent'
import Asset from '../Formats/assetHe'
import { useHistory } from 'react-router-dom';

const styles = {
    header: {

      fontSize: "24px",
      marginBottom:'10px'
    },

  };
  
  const useStyles = makeStyles(styles);
  const item =(label,value)=>{
    console.log(value)
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
      var unit = Object.assign({}, store.assets[lastChar]);
      console.log(store.assets[lastChar])
      // var unit = store.assets[props.num]
      try{
      delete unit.Contant
      delete unit.Financial
      delete unit.Operative
      // delete unit.Operative
      setUnit(unit)
      }catch{}
    }, [])
  return(<Card>
    <Card.Content>
      <Card.Header
       className={classes.header}
       >פרטים כלליים</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>

          <Feed.Content>
            {
              Object.keys(unit).map(function(key, index) {
                var str = String(unit[key])
                return(<Feed.Date  content={itemProps(assetFormat[key],str)}/>)
              })
              
            }

            
          </Feed.Content>
        </Feed.Event>

      </Feed>
    </Card.Content>
  </Card>
  )
}

export default Temp