import React, { FC } from 'react';
import {
  Paper, ClickAwayListener, Backdrop, Tooltip, IconButton, Typography, Divider,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const PopupModal: FC<any> = ({
  showModal, setShowModal, title, children,
}) => {
  return (
    <Backdrop
      sx={{
        background: 'linear-gradient(45deg,rgb(19, 19, 19, 0.1),rgba(28, 28, 28, 0.2))',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        marginTop: '-24px',
        zIndex: 100,
      }}
      open={showModal}
    >
      <ClickAwayListener
        onClickAway={() => {
          setShowModal(false);
        }}
      >
        <Paper
          style={{
            width: '60vw',
            maxHeight: '80vh',
            position: 'relative',
            padding: '0.5rem 1rem',
            overflow: 'hidden',
          }}
        >
          <Typography variant="h4" gutterBottom>{title}</Typography>
          <Divider />
          <Tooltip title="Close">
            <IconButton
              onClick={() => {
                setShowModal(false);
              }}
              sx={{
                position: 'absolute',
                top: '0.7rem',
                right: '1rem',
              }}
            >
              <ClearIcon />
            </IconButton>
          </Tooltip>
          {children}
        </Paper>
      </ClickAwayListener>
    </Backdrop>
  );
};

export default PopupModal;
