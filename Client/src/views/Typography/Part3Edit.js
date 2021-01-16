import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

export default function Part3Edit(props) {

    const id=props.id
    return(
      props.nis.map((n,i)=>{return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
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
                  //  send={handleINCustomInput}
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
                  //  send={handleINCustomInput}
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
                  //  send={handleINCustomInput}
                  labelText="תאריך"
                  id={"operative-date"+i}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue:n["operative-date"],
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
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
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                  //  send={handleINCustomInput}
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
                <Button
                  fullWidth
                  color="success"
                //   onClick={() => showNotification("tl")
                // }
                >
                 עדכן
                </Button>
              </GridContainer>
 )})
  );
}
