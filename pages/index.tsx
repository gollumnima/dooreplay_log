import React from 'react';
import format from 'date-fns/format';
import { getPosts } from '~/utils/getPosts';
import styles from './main.module.css';
import { PostListItem } from '~/types';

const {
  mainContainer, title, titleLine, mainListGroup,
} = styles;

const Main = ({ posts }: { posts: PostListItem[] }) => (
  <div className={mainContainer}>
    {/* // 날짜 형식은 어떻게 할지 다음에 고민해보지 뭐~~ */}
    <h1 className={title}>{format(new Date(), 'MMMM y')}</h1>
    <hr className={titleLine} />
    <main>
      <h1>🪓 토.목.공.사 🪓</h1>
      <span>🪓 토공은 블로그 오픈을 기다리며 목빠지게 공사중 🪓</span>
    </main>
    <br />
    <br />
    <br />
    <hr />
    <br />
    <ul className={mainListGroup}>
      {posts.map((post) => {
        const { meta, slug } = post;
        const url = `posts/${slug.join('/')}`;
        return (
          <React.Fragment key={url}>
            <a href={url}>
              <li className="underline decoration-wavy decoration-indigo-600">
                <span>{meta.title}</span>
                <span>{meta.date}</span>
              </li>
            </a>
          </React.Fragment>
        );
      })}
    </ul>
  </div>
);

export default Main;

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};
