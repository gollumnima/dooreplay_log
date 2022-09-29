import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { getFilesRecursively } from './getFilesRecursively';

const files = getFilesRecursively('pages');

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
  const fileContents = fs.readFileSync(path.join(`${slug}.mdx`), 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data, content,
  };
};
