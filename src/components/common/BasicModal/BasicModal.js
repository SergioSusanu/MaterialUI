import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import {Styles} from './Styles';
import CommonButton from "../CommonButton/CommonButton";

export default function BasicModal({open, handleClose}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Styles.wrapper}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new user
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Fill out the inputs and hit the 'submit'button
          </Typography>
          <Box sx={Styles.inputs}>
            <Input placeholder="Email" />
            <Input placeholder="Phone number" />
            <Input placeholder="User id" />
          </Box>
          <Box sx={Styles.buttons}>
            <CommonButton
              size="large"
              variant="contained"
            //   sx={{ backgroundColor: theme.palette.primary.main }}
            //   handleClick={handleClick}
            >
              Submit
            </CommonButton>
            <CommonButton variant="contained"
            handleClick={handleClose}
            >Cancel</CommonButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}