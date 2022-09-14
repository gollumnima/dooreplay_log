import Head from 'next/head';
import { Footer } from '../Footer';
import { MenuBar } from '../MenuBar';
import styles from './layout.module.css'

// TODO: meta tag 넣고, title 페이지별로 동적으로 적용하기

type Props = {
  children: React.ReactElement;
};

const { layout_container, layout_box, content_wrapper } = styles

const Layout: React.FC<Props> = ({ children }) => (
  <div className={layout_container}>
    <div className={layout_box}>
      <MenuBar />
      <div className={content_wrapper}>
        {children}
      </div>
    </div>
    <Footer />
  </div>

);

export default Layout;
