import React from 'react';
import { Footer } from '../Footer';
import { MenuBar } from '../MenuBar';
import styles from './layout.module.css';

// TODO: meta tag 넣고, title 페이지별로 동적으로 적용하기

type Props = {
  children: React.ReactElement;
};

const { layoutContainer, layoutBox, contentWrapper } = styles;

const Layout: React.FC<Props> = ({ children }) => (
  <div className={layoutContainer}>
    <div className={layoutBox}>
      <MenuBar />
      <div className={contentWrapper}>
        {children}
      </div>
    </div>
    <Footer />
  </div>

);

export default Layout;
