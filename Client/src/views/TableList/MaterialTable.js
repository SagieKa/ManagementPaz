import React, { useState,useContext,useEffect } from "react";
import MaterialTable from "material-table";
import { useHistory,  useParams ,useLocation} from 'react-router-dom';
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import DashData from '../../DashContent'
import axios from 'axios'
const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiPaper-root": {
        borderRadius: "100px",
        boxShadow: "none;"
      }
    }
  }));

  
export default function TableMaterial() {
    const classes = useStyles();
    const location = useLocation()
    let { slug } = useParams()
    const history = useHistory()
  const {store,setStore}=useContext(DashData)

  return (
    <div className={classes.root}>
      {/* <h1>רשימת אנשים</h1>
      <a href="https://medium.com/better-programming/intro-to-material-table-for-react-74db0fbd2d32">
        Click here for an intro to material-table
      </a> */}
      <div style={{
         maxWidth: "100%",
        //  paddingRight:'12px',
         backgroundColor:'none'
        
        //  margin:'auto',
        //  paddingRight:'12px'
        // paddingTop: "12px" 
      }}>
        <MaterialTable
          columns={[
            {
              title: "תאריך קניה",
              field: 'buy-date',
    
            },
            {
              title: 'תאריך מסירה',
              field: 'delivery-date',
       
            },
            {
              title: 'פרוייקט',
              field: 'project',
      
            },
            {
              title: 'בנק מלווה',
              field: 'bank',
       
            },
            {
              title: 'קבלן',
              field: 'contractor',
            
          
            },
            {
              title: 'יזם',
              field:  'entrepreneur',
           
      
            },
            {
              title:'עיר',
              field: 'city',
              
     
            },
            {
              title: 'כתובת',
              field: 'adress',
     
            },
            {
              title:'בניין',
              field:'building',
              
   
            },
            {
              title: 'קומה',
              field: 'floor',
     
            },
            {
              title: 'מספר',
              field:'number',
              
   
            },
            {
              title: 'חדרים',
              field:'rooms',
     
            },
            {
              title: "גודל(מ''ר)",
              field: 'size(sqm)',
              
    
            },
            {
              title: "מרפסת(מ''ר)",
              field:'terrace(sqm)',
              
        
            },
            {
              title:'מחסן',
              field: 'storage',
              
     
            },
            {
              title:'מחניות',
              field: 'parking',
      
            },
            {
              title:'מחיר קניה',
              field: 'purchase-price',
    
            },
            {
              title:'שווי נוכחי',
              field:'current-value',
              
         
            },
            {
              title:'הלוואות',
              field: 'loans',
              
           
            },
            {
              title:'תזרים',
              field: 'flow',
              
         
            },
          ]}
          data={store.assets}
          title="רשימת פרטי נכס"
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            // ResetSearch: (props) => <NavigateBeforeIcon />,
            PreviousPage: (props) => <NavigateNextIcon />,
            NextPage: (props) => <NavigateBeforeIcon />,
            LastPage: (props) => <FirstPageIcon/>,
            FirstPage: (props) => <LastPageIcon />,
          }}

          localization={{
            toolbar:{searchPlaceholder:'חפש'},
            pagination:{
              labelRowsSelect:'שורות' ,
              labelDisplayedRows: '{from}-{to} מתוך {count}',
              firstTooltip: 'דף ראשון',
              lastTooltip:'דף אחרון',
              previousTooltip: 'דף קודם',
              nextTooltip:'דף הבא',
             
            },
            header:{actions:'פעולות'}
          }}
          actions={[
            {
              icon: () => 'delete',
              tooltip: "Save User",
              onClick: (event, rowData) => {
               
                var item = history.location.pathname
                var lastChar = item.substr(item.length - 1);
               console.log(lastChar)
                history.push(`/rtl/icons/${rowData.tableData.id}`)
                

              }
            }
          ]}
          
          components={{
            Action: (props) => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="text"
                style={{ textTransform: "none" }}
                size="small"
              >
                <MoreVertIcon />
              </Button>
            )
          }}
          options={{
            cellStyle: {
                textAlign: 'right',
                backgroundColor:'none'
              },
            //   filtering: true,
            exportButton: true
            // headerStyle: {
            //   backgroundColor: "#01579b",
            //   color: "#FFF"
            // }
          }}
        />
      </div>
    </div>
  );
}