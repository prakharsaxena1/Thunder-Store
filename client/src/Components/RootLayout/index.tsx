import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar from '../Navbar';
import { colors, urls } from '../../Constants/constants';
import { CopyrightText } from '../BrandText';

const newTabOpenUrl = (url: string) => {
  window.open(url, '_blank');
};

const RootLayout: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ marginTop: 'auto' }}>
        <div style={{ padding: '2rem', backgroundColor: colors.primary }}>
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
          <CopyrightText
            styles={{
              marginTop: '1rem',
              width: '100%',
              textAlign: 'center',
            }}
          />
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
