import React, { FC, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fade } from '@mui/material';

interface IConfirmation {
  message: string;
  confirmLabel: string;
  onConfirm: () => void;
  onClose: () => void;
  children?: React.ReactNode,
  open: boolean;
}

const Confirmation: FC<IConfirmation> = ({
  message, confirmLabel, onConfirm, onClose, children, open,
}) => {
  const textFieldRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Fade}
        keepMounted
        onClose={onClose}
        disableEnforceFocus
      >
        <DialogTitle>Confirm action</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
          {children && children}
        </DialogContent>
        <DialogActions>
          <Button onClick={onConfirm}>{confirmLabel}</Button>
          <Button onClick={onClose}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Confirmation;
