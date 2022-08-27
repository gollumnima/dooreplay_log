import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';
import { MenuBar } from './MenuBar';
import Meta from './Meta';

// TODO: meta tag 넣고, title 페이지별로 동적으로 적용하기

type Props = {
  children: React.ReactElement;
  pageTitle?: string;
};

const Layout: React.FC<Props> = ({ children, pageTitle }) => (
  <>
    <Meta pageTitle={pageTitle ?? ''} />
    <Header />  
    <MenuBar>
      {children}
    </MenuBar>
    <Footer />
  </>
);

export default Layout;
