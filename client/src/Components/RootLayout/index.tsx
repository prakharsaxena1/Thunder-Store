import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const RootLayout = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
  </div>

);

export default RootLayout;
