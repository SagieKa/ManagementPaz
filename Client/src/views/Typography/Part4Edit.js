import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

export default function Part4Edit(props) {

    const id=props.id
    return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="כללי"
                    id={'financial-general'+id}
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
                  id={"financial-details"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="הודעת תשלום"
                  id={"financial-message-payment"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="תשלום"
                  id={"financial-payment"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="תאריך"
                    id={"financial-date"+id}
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
                  labelText="ערבות בנקאית"
                  id={"financial-bankait"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="ח.מס\קבלה"
                  id={"financial-Acceptance"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="מע''מ"
                  id={"financial-vat"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="מתווה פיננסי"
                  id={"financial-financial"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="הערות רושמים כאן"
                  id={"financial-remarks"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
               
              </GridContainer>

  );
}
