import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Additional Details" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <ul>
  <li>A detailed discussion of all 200 questions asked in INICET November 2022 – Morning Session referred from standard textbooks</li>
  <li>Subject wise categorisation of question for comprehensive study</li>
  <li>Additional expected question added in red box which we believe will be tested for future exam</li>
  <li>High quality images and illustration for visual learning</li>
  <li>Easily explained concepts with colour coding</li>
  <li>Disclaimer: The question and Answers only simulates the INICET November 2022 – Morning Session exam pattern and is for educational 
 purpose only
</li>
</ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <ul>
  <li>A detailed discussion of all 200 questions asked in INICET November 2022 – Morning Session referred from standard textbooks</li>
  <li>Subject wise categorisation of question for comprehensive study</li>
  <li>Additional expected question added in red box which we believe will be tested for future exam</li>
  <li>High quality images and illustration for visual learning</li>
  <li>Easily explained concepts with colour coding</li>
  <li>Disclaimer: The question and Answers only simulates the INICET November 2022 – Morning Session exam pattern and is for educational 
 purpose only
</li>
</ul>
      </CustomTabPanel>
     
    </Box>
  );
}