import { PostCard } from '~/components/PostCard';
import { PostContentType, PostsType } from '~/types';
import getPosts from '~/utils/getPosts';

const Main: React.FC<PostsType> = ({ posts }) => (
  <div>
    <h1>최근 포스트</h1>
    {posts.map((post: PostContentType) => {
      const {
        slug, data
      } = post;

      return (
        <>
         <main>
          <h1>🪓 토.목.공.사 🪓</h1>
          <span>🪓 토공은 블로그 오픈을 기다리며 목빠지게 공사중 🪓</span>
         </main>
         <br />
         <br />
         <br />
        <PostCard
          key={slug}
          data={data}
          slug={slug}
        />
        </>
      );
    })}
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
