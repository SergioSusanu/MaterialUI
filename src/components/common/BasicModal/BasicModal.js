import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import {modalStyles} from './styles'
import CommonButton from "../CommonButton/CommonButton";

export default function BasicModal({open, handleClose, title, subTitle, contents}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyles.wrapper}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {subTitle}
          </Typography>
          {contents}
        </Box>
      </Modal>
    </div>
  );
}