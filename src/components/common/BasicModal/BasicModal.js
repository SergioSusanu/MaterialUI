import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import {modalStyles} from './styles'
import CommonButton from "../CommonButton/CommonButton";

export default function BasicModal({open, handleClose, title, subTitle, contents, onSubmit}) {

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyles.wrapper}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {subTitle}
          </Typography>
          {contents}
          <Box sx={modalStyles.buttons}>
            <CommonButton size="large" variant="contained"
            onClick={onSubmit}
            >
              Submit
            </CommonButton>
            <CommonButton variant="contained" onClick={handleClose}>
              Cancel
            </CommonButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}