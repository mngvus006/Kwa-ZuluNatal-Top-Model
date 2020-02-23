import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppFloatingButton from 'components/WhatsAppFloatingBtn';
// @material-ui/icons
import Camera from "@material-ui/icons/CameraAltOutlined";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/owner.JPG";

import charity1 from "assets/img/Charity1.jpg";
import charity2 from "assets/img/Charity2.jpg";
import charity3 from "assets/img/Charity3.jpg";
import charity4 from "assets/img/Charity4.jpg";
import charity5 from "assets/img/Charity5.jpg";
import charity6 from "assets/img/Charity6.jpg";
import charity7 from "assets/img/Charity7.jpg";
import work1 from "assets/img/Runway.jpg";
import work2 from "assets/img/Crown4.jpg";
import work3 from "assets/img/Crown1.jpg";
import work4 from "assets/img/Banner.JPG";
import work5 from "assets/img/Crown5.jpg";
import work6 from "assets/img/Crown2.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="KZN Top Model"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/CanvaBanner.png")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Zakhele Zulu Khumalo</h3>
                    <h6> Kwa Zulu Natal Top Model south Africa Founder </h6>
                    <a href="https://twitter.com/kzntmsa?lang=en" >
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    </a>
                    <a href="https://www.instagram.com/kzn_top_model/" >
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    </a>
                    <a href="https://web.facebook.com/Zakhele-Zulu-Khumalo-786241574810544/?_rdc=1&_rdr" >
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    </a>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                He is an entrepreneur that is very passionate about community
                and youth development. He is a property developer in KZN and
                also an investor in multi level of business ventures. He’s a
                performing artist at the Playhouse Opera Company, also a Head of
                Star Quality Acting Academy in KZN. Zakhele is a coca cola brand
                soul ambassador which is a programme introduced by Coca Cola
                Beverages South Africa for community and youth development.
                Zakhele studied International Marketing Management through IMM
                Graduates School. Zakhele was born in Ezimbokwedweni KZN, his
                late Father Prince Themba Zulu Khumalo was originally from
                Nongoma KZN. Zakhele’s working experience has played a big role
                in his leadership skills. He has worked for the following
                companies in various roles: Edcon retail, First National Bank &
                Coca Cola Beverages South Africa. Zakhele is involved in the
                fashion and modelling development in collaboration with KZN Top
                Model & Fezile Mdletshe Agency. Together with KZNTM & FMA he’s
                developed raw models from various local KZN Municipalities such
                as: Dr Nkosazana Dlamini Zuma Municipality, Ukhahlamba
                Municipality and currently running an annual project in the
                whole of KZN in fashion and talent supported by NLC.
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Charity",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={charity1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={charity2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={charity7}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={charity5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={charity4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={charity6}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={charity3}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Role Models",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work6}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
}
