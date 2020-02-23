import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/CameraAltOutlined";
import VerifiedUser from "@material-ui/icons/CardMembershipOutlined";
import Fingerprint from "@material-ui/icons/PeopleOutlineOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}> About Us</h2>
          <h5 className={classes.description}>
            KZN Top Model SA organizes, promotes, youth development (in all
            spheres of their journey), beauty and fashion activities, charity
            programmes, business and tourism programmes, healthy lifestyle and
            supports diverse cross- cultural activities throughout the KZN. Our
            goal is to promote a better society, strong future leaders,
            sophisticated, self-reliant who are world expose, travel, we have
            created a platform where they not only focus on their physical
            appearance but they must be wholly rounded. It is an exchange of
            ideas forum, and helps youth to improve understanding between people
            from diverse cultures or all walks of life.
          </h5>
          <h5 className={classes.description}>
            We aspire work relations with local and international businesses to
            create activities that feature a variety of regional and
            international experiences and many more. Our events support our
            communities, promote our local businesses and sponsor partners, and
            it further shine a spotlight on our wonderful work and youth growth
            activities.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}> Our Mission</h2>
          <h5 className={classes.description}>
            The KZN Top Model SA is the largest, fairest and most influential
            beauty pageant and Runway Show in the province of KZN and in the
            city of Durban. Since its inception, we have been dedicated to
            promoting Youth Development, Talent Nurturing, KZN and the country’s
            Cultural Heritage, Charity Involvement, Diverse Cultural Awareness,
            Tourism Awareness and National and Community Pride.
          </h5>
          <h5 className={classes.description}>
            The beauty pageant and Runway Show provide the platform to allow
            outstanding young men and women the rare opportunity to display
            their artistic skills, intelligence, confidence, cultural pride and
            leadership in order to further advance themselves in their immediate
            Communities and the Society at large. Our event will also help
            foster community development, diverse cultural awareness and
            tolerance, boost local business and create more economic
            opportunities for all and especially our sponsors, bolster the
            awareness of good citizenry and importance of charity work, create
            tourism awareness, produce more role models in the society.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Download membership forms and sign up today with
            Kwa Zulu Natal Top Model and take advantage of the following
            opportunities:
          </h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Modeling and Fashion"
              description="We offer workshops and mentorship to become KZN Top model ambassador. Winner of KZN Top Model beauty pageant and Runway Show will participate in KZN Fashion Council, Durban Fashion Fair.
             Become the face of Strategic Marketing, Digital Media and PR campaigns
             High prize cash, scholarship and prize/s 4 night cruise from MSC "
              icon={Camera}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Accredited Trainings"
              description="Our training leads to a formal qualification in Modeling and Fashion."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Digital Profile"
              description="You will be feactured on our online digital profile for talent scouts easily find you and get rewarding work experience in modeling, TV commercials and brand promoter"
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>

      <div>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            We aspire work relations with local and international businesses to
            create activities that feature a variety of regional and
            international experiences and many more. Our events support our
            communities, promote our local businesses and sponsor partners, and
            it further shine a spotlight on our wonderful work and youth growth
            activities.
          </h4>

          <h4 className={classes.description}>
          <a href = "mailto: info@kzntopmodel.co.za">Send Email</a>
          </h4>
        </GridItem>
      </GridContainer>
      </div>
    </div>
  );
}
