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
      <>
      <main>
        <h1>🪓 토.목.공.사 🪓</h1>
        <span>
          🪓 토공은 블로그 오픈을 기다리며 목빠지게 공사중 🪓
        </span>
      </main>
      </>
    </MenuBar>
    <Footer />
  </>
);

export default Layout;
