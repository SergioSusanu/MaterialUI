import React from 'react'
import GridWrapper from '../components/common/GridWrapper/GridWrapper'
import BasicSnackBar from '../components/common/BasicSnackBar/BasicSnackBar'
import CommonButton from '../components/common/CommonButton/CommonButton';

const Menu = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <GridWrapper>
      Menu page
      <CommonButton variant="contained" onClick={handleClick}>
        Open success snackbar
      </CommonButton>
      <BasicSnackBar open={open} handleClose={handleClose}
      severity="success"
      message="Sergio's the best"
      />
    </GridWrapper>
  );
}

export default Menu