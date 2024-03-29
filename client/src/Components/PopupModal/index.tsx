import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import {
  Paper, ClickAwayListener, Backdrop, Tooltip, IconButton, Typography, Divider,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface IPopupModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const PopupModal: FC<IPopupModal> = ({
  showModal, setShowModal, title, children,
}) => {
  return ReactDOM.createPortal(
    (
      <Backdrop
        sx={{
          background: 'linear-gradient(45deg,rgb(19, 19, 19, 0.1),rgba(28, 28, 28, 0.2))',
          overflow: 'hidden',
          backdropFilter: 'blur(4px)',
          zIndex: 100,
        }}
        open={showModal}
        transitionDuration={400}
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
              padding: '2rem 2rem',
              overflow: 'auto',
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
    ), document.getElementById('portal')!,
  );
};

export default PopupModal;
