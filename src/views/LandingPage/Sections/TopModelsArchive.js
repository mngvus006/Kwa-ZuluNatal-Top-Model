import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function TopModelsArchive() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
     
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h2>KZN Top Model Talent</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <Small>
                  <h4>Zakhele Dladla</h4>
                </Small>

           
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
                <Small>
                  <h4>Fezile Mkhize</h4>
                </Small>

  
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Small>
                  <h4>Skhumbuzo Mkhungo</h4>
                </Small>

             
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
                <Small>
                  <h4>Vusi Mngomezulu</h4>
                </Small>
           
              </Link>
            </GridItem>
          </GridContainer>
          <GridContainer />

          <GridContainer>
            <GridItem xs={12} sm={2}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <Small>
                  <h4>Zakhele Dladla</h4>
                </Small>

           
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
                <Small>
                  <h4>Fezile Mkhize</h4>
                </Small>

  
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Small>
                  <h4>Skhumbuzo Mkhungo</h4>
                </Small>

             
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
                <Small>
                  <h4>Vusi Mngomezulu</h4>
                </Small>
           
              </Link>
            </GridItem>
          </GridContainer>
          <GridContainer />

          <GridContainer>
            <GridItem xs={12} sm={2}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <Small>
                  <h4>Zakhele Dladla</h4>
                </Small>

           
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
                <Small>
                  <h4>Fezile Mkhize</h4>
                </Small>

  
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Small>
                  <h4>Skhumbuzo Mkhungo</h4>
                </Small>

             
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
                <Small>
                  <h4>Vusi Mngomezulu</h4>
                </Small>
           
              </Link>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
