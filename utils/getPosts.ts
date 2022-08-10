import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const getPosts = () => {
  const files = fs.readdirSync(path.join('posts'));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.mdx,', '');
    const fileContents = fs.readFileSync(
      path.join(`posts/${slug}`),
      'utf8',
    );

    const { data } = matter(fileContents);
    console.log({ data });
    return {
      slug, data,
    };
  });
  return allPostsData;
};

export default getPosts;
