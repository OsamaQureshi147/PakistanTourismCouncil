import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import pic1 from "../../assests/images/Badshai_Mosque.jpeg";
import k2 from "../../assests/images/k2.jpeg";
import seaview from "../../assests/images/seaview.jpeg";
import Gawadar from "../../assests/images/Gawadar.jpeg";
import lake_saifulmalook from "../../assests/images/saif-ul-malook.png";
import passu_cones from "../../assests/images/passu_cones.jpeg";
import { PlacesCard } from "./PlacesCard";

import classes from "./FamousPlace.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const PlacesTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          centered
        >
          <Tab label='All' {...a11yProps(0)} />
          <Tab label='North' {...a11yProps(1)} />

          <Tab label='Central' {...a11yProps(2)} />
          <Tab label='South' {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={classes.inside}>Item One</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.inside}>
          <PlacesCard
            name='Saif ul Malook'
            pic={lake_saifulmalook}
            description='Saiful Muluk is the most famous lake in Pakistan’s city Naran. It is a lovely, clear water lake with a faint green tint located at an elevation of 10,578ft '
          />
          <PlacesCard
            name='K2'
            pic={k2}
            description=' K2, at 8,611 metres (28,251 ft) above sea level, is the second-highest mountain on Earth, after Mount Everest (at 8,849 metres (29,032 ft))'
          />
          <PlacesCard
            name='Passu Cones'
            pic={passu_cones}
            description='Passu cones are situated in Passu village in Upper Hunza alongside the Karakorum Highway'
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.inside}>
          <PlacesCard
            name='Badshai Mosque'
            pic={pic1}
            description='constructed by the Mughal emperor Aurangzeb between 1671 and 1673 and was the largest mosque in the world from 1673 to 1986'
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.inside}>
          <PlacesCard
            name='Clifton Beach'
            pic={seaview}
            description='Clifton Beach, also known as Sea View, is a beach in Karachi, Sindh, Pakistan and is located on the Arabian Sea'
          />

          <PlacesCard
            name='Gawadar'
            pic={Gawadar}
            description='Gwadar is a port city with located on the southwestern coast of Balochistan, Pakistan. The city is located on the shores of the Arabian Sea opposite Oman'
          />
        </div>
      </TabPanel>
    </Box>
  );
};
