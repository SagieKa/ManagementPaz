import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

export default function Part2Edit(props) {

    const id=props.id
    return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="סוג"
                    id={"contantsType"+id}
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
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="שם החברה"
                  id={"contantsCompanyName"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="שם מלא"
                  id={'contantsFullname'+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="תפקיד"
                  id={"contantsRole"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="טלפון"
                    id={"contantsPhoneNumber"+id}
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
                <GridItem xs={12} sm={12} md={41}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="מייל"
                  id={"contantsMail"+id}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
               
              </GridContainer>

  );
}
