import React from 'react';
import { Outlet } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar from '../Navbar';
import { urls } from '../../Constants/constants';

const newTabOpenUrl = (url: string) => {
  window.open(url, '_blank');
};

const RootLayout = () => (
  <div
    style={{
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}
  >
    <header>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <div style={{ padding: '1rem' }}>
        <Typography component="h2" align="center" variant="h6">Let&apos;s connect</Typography>
        <div
          style={{
            width: 'fit-content',
            margin: 'auto',
          }}
        >
          <IconButton
            onClick={() => newTabOpenUrl(urls.socials.linkedin)}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            onClick={() => newTabOpenUrl(urls.socials.github)}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() => newTabOpenUrl(urls.socials.twitter)}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            onClick={() => newTabOpenUrl(urls.socials.instagram)}
          >
            <InstagramIcon />
          </IconButton>
        </div>
      </div>
    </footer>
  </div>
);

export default RootLayout;
