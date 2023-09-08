import React from 'react';
// import { Footer } from '../Footer';
// import { MenuBar } from '../MenuBar';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import { Footer } from '../Footer';

// TODO: meta tag 넣고, title 페이지별로 동적으로 적용하기

type Props = {
  children: React.ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Box sx={{ display: 'flex', bgcolor: 'primary.main', height: '100vh' }}>
        <Navbar>
          {children}
        </Navbar>
      </Box>
      <Footer />
    </>
  )
}

export default Layout