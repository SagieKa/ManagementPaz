import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

export default function Part3Edit(props) {

    const id=props.id
    return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="כללי"
                    id={"operative-general"+id}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      left:-1
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="פירוט"
                  id={"operative-details"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="סטטוס"
                  id={"operative-status"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="תאריך"
                  id={"operative-date"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="ח.מס\קבלה"
                    id={"operative-acceptance"+id}
                    formControlProps={{
                      fullWidth: true ,
                      "& .MuiInputLabel-formControl": {
                        left:'1'
                      }
                    }}
                    inputProps={{
                      disabled: false,
                      left:-1
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="הערות"
                  id={"operative-remarks"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                
              </GridContainer>

  );
}
