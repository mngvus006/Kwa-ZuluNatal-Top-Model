import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import ALC from "assets/img/affiliations/ALC.JPG";
import MBD from "assets/img/affiliations/MBD.JPG";
import WOOLWORTH from "assets/img/affiliations/WOOLWORTH.JPG";
import CLP from "assets/img/affiliations/CLP.JPG";
import EvaTV from "assets/img/affiliations/EvaTV.JPG";
import LottoFund from "assets/img/affiliations/LottoFund.JPG";
import Isifundaza from "assets/img/affiliations/Isifundaza.JPG";
import SACruise from "assets/img/affiliations/SACruise.JPG";
import CocaCola from "assets/img/affiliations/CocaCola.JPG";
import SAModel from "assets/img/affiliations/SAModel.JPG";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <h2 align="center" className={classes.title}>Our Sponsors</h2>
            <div className={classes.container}>
                <div id="images">
                    <GridContainer>
                        <GridItem xs={12} sm={2}>
                            <h4>ALC</h4>
                            <img
                                src={ALC}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }  
                            />
                        </GridItem>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>MBD</h4>
                            <img
                                src={MBD}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }  
                            />
                        </GridItem>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>WOOLWORTH</h4>
                            <img
                                src={WOOLWORTH}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }  
                            />
                        </GridItem>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>CLP</h4>
                            <img
                                src={CLP}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }
                            />
                        </GridItem>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>EvaTV</h4>
                            <img
                                src={EvaTV}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }
                            />
                        </GridItem>
                  
                    </GridContainer>
                    <GridContainer />

                    <GridContainer>
                    <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>LottoFund</h4>
                            <img
                                src={LottoFund}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }
                            />
                        </GridItem>
                        
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Isifundaza</h4>
                            <img
                                src={Isifundaza}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }
                            />
                        </GridItem>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>SACruise</h4>
                            <img
                                src={SACruise}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }
                            />
                        </GridItem>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>CocaCola</h4>
                            <img
                                src={CocaCola}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }
                            />
                        </GridItem>
            
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>SAModel</h4>
                            <img
                                src={SAModel}
                                alt="..."
                                className={
                                    classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                }
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer />
                </div>
                <div className={classes.space50} />    
            </div>

        </div>
    );
}
