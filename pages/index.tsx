import React from 'react';
import format from 'date-fns/format';
import { PostContentType, PostsType } from '~/types';
import getPosts from '~/utils/getPosts';

const Main = ({ posts }:PostsType) =>
  // {posts.map((post: PostContentType) => {
  //   const {
  //     slug, data,
  //   } = post;
  (
    <div>
      {/* // 날짜 형식은 어떻게 할지 다음에 고민해보지 뭐~~ */}
      <h1>{format(new Date(), 'MMMM y')}</h1>
      <main>
        <h1>🪓 토.목.공.사 🪓</h1>
        <span>🪓 토공은 블로그 오픈을 기다리며 목빠지게 공사중 🪓</span>
      </main>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <ul>
        {posts.map((post) => {
          const { data: fileData, slug: url } = post;
          return (
            <React.Fragment key={url}>
              <a href={`/${url}`}>
                <li>
                  <span>{fileData.title}</span>
                  <span>{fileData.date}</span>
                </li>
              </a>
            </React.Fragment>
          );
        })}
      </ul>
      {/* <PostCard
            key={slug}
            data={data}
            slug={slug}
          /> */}
    </div>
  );

export default Main;

export const getStaticProps = () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};
