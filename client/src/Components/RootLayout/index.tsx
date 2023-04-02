import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
      
  )
}

export default RootLayout;
