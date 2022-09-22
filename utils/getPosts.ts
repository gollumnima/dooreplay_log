import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { getFilesRecursively } from './getFilesRecursively';

const files = getFilesRecursively('posts');

export const getPosts = () => {
  const allPostFiles = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fileContents = fs.readFileSync(
      path.join(`${slug}.mdx`),
      'utf8',
    );

    const { data } = matter(fileContents);

    return {
      slug, data,
    };
  });
  return allPostFiles;
};

export const getPost = (slug: string) => {
  console.log({ slug });
  const fileContents = fs.readFileSync(path.join(`${slug}.mdx`), 'utf8');
  const { data, content } = matter(fileContents);
  console.log({ data });
  return {
    data, content,
  };
};
