import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

export default function Done(props) {

    const id=props.id
    return(
            <GridContainer>
                <Button
                  fullWidth
                  color="success"
                //   onClick={() => showNotification("tl")
                // }
                >
                 עדכן
                </Button>
               
              </GridContainer>

  );
}
