/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} buttonIcon={Apps}>
        <Link to="profile-page" className={classes.link}>
          <Button
            href="#"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Top Model Founder
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Membership forms"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={CloudDownload}
          dropdownList={[
            <a
              href="https://storage.cloud.google.com/kzn-model-contract/KZNTM20%20ENTRY%20FORM.pdf"
              target="_blank"
              className={classes.dropdownLink}
            >
              KZN Top Model 2020 ENTRY FORM
            </a>,
            <a
              href="https://storage.cloud.google.com/kzn-model-contract/KZN%20TOP%20MODEL%20Contract%202.pdf"
              target="_blank"
              className={classes.dropdownLink}
            >
              KZN Top Model Contract
             
            </a>,
            <a
              href="https://storage.cloud.google.com/kzn-model-contract/KZNTM%20DESIGNER%20MEMBERSHIP.pdf"
              target="_blank"
              className={classes.dropdownLink}
            >
            KZN Top Designer Membership
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/kzntmsa?lang=en"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/pages/category/Community-Organization/KZN-Top-Model-South-Africa-935167093218306/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/kzn_top_model/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
