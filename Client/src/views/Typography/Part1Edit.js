import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

export default function Part1Edit() {


    return(
      <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="תאריך קניה"
                    id="buy-date"
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
                    labelText="תאריך מסירה"
                    id="delivery-date"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                    labelText='פרוייקט'
                    id="project"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                    labelText="בנק מלווה"
                    id="bank"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="יזם"
                    id="entrepreneur"
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
                  labelText="קבלן"
                  id="contractor"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="עיר"
                  id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="כתובת"
                  id="adress"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="בניין"
                    id="building"
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
                  labelText="קומה"
                  id="floor"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="מספר"
                  id="number"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="חדרים"
                  id="rooms"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="גודל(מ''ר)"
                    id="size(sqm)"
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
                    // send={handleINCustomInput}
                    labelText="מרפסת(מ''ר)"
                    id="terrace(sqm)"
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
                  labelText="מחסן"
                  id="storage"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="חניות"
                  id="parking"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="מחיר קניה"
                  id="purchase-price"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
 
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    // send={handleINCustomInput}
                    labelText="שווי נוכחי"
                    id="current-value"
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
                  labelText="הלוואות"
                  id="loans"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="תזרים"
                    id="project"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  //  send={handleINCustomInput}
                  labelText="תזרים"
                    id="flow"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem> */}
              </GridContainer>

  );
}
