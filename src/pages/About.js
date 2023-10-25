import { Grid } from '@mui/material'
import React from 'react'
import CommonButton from '../components/common/commonButton/CommonButton';

const About = () => {

  const buttonStyles = {
    fontWeight:600,
    textTransform:'capitalize',
    borderRadius:2.5,
    // '&.MuiButton-contained':{
    //   backgroundColor: '#009be5',
    //   '&:hover':{
    //     backgroundColor:'#006db3'
    //   }
    // },
    // '&.MuiButton-outlined':{
    //   color:'#fff',
    //   borderColor:'#fff',
    //   '&.hover':{
    //     backgroundColor:'transparent'
    //   }
    // }
  }

  return (
    <div style={{ backgroundColor: "#009be5" }}>
      Authentication
      <CommonButton variant="contained" color="primary" sx={buttonStyles}>
        Text
      </CommonButton>
      <CommonButton variant="outlined" color="secondary" sx={buttonStyles}>
        Text2
      </CommonButton>
    </div>
  );
}

export default About