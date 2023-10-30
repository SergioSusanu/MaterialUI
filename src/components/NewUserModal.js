import React from 'react'
import BasicModal from './common/BasicModal/BasicModal'
import { Box, Input } from '@mui/material';
import { modalStyles } from './common/BasicModal/styles';
import CommonButton from './common/CommonButton/CommonButton';

const NewUserModal = ({open, handleClose}) => {

    const getContent = () =>{
        return (
          <>
            <Box sx={modalStyles.inputs}>
              <Input placeholder="Email" />
              <Input placeholder="Phone number" />
              <Input placeholder="User id" />
            </Box>
            <Box sx={modalStyles.buttons}>
              <CommonButton
                size="large"
                variant="contained"
                //   sx={{ backgroundColor: theme.palette.primary.main }}
                //   handleClick={handleClick}
              >
                Submit
              </CommonButton>
              <CommonButton variant="contained" handleClick={handleClose}>
                Cancel
              </CommonButton>
            </Box>
          </>
        );
    }

  return (
    <BasicModal
      open={open}
      handleClose={handleClose}
      title="Add new user"
      subTitle="Fill out the inputs and hit the 'submit'button"
      contents={getContent()}
    ></BasicModal>
  );
}

export default NewUserModal