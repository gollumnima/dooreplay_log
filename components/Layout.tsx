import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';
import { MenuBar } from './MenuBar';

// TODO: meta tag 넣고, title 페이지별로 동적으로 적용하기

type Props = {
  children: React.ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />  
    <MenuBar>
      {children}
    </MenuBar>
    <Footer />
  </>
);

export default Layout;
