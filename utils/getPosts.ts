import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';
import { getFilesRecursively } from './getFilesRecursively';
import { Post, PostListItem } from '~/types';

const files = getFilesRecursively(path.join(process.cwd(), 'pages/posts')).filter((file) => file.match(/\.mdx$/));

const refinePostMeta = (data: Record<string, any>) => ({
  title: data.title ?? '',
  date: data.date ?? '',
  description: data.description ?? '',
  thumbnail: data.thumbnail ?? '',
  tags: data.tags ?? [],
});

export const getPosts = async (): Promise<PostListItem[]> => {
  const allPostFiles = await Promise.all(files.map(async (fileName) => {
    const slug = fileName.replace('.mdx', '');

    const meta = await fs.readFile(fileName, 'utf8')
      .then((file) => matter(file));

    return {
      slug: slug.split('/posts')[1].split('/').slice(1),
      meta: refinePostMeta(meta.data),
    };
  }));

  return allPostFiles;
};

export const getPost = async (slug: string[]): Promise<Post> => {
  const filePath = path.join(process.cwd(), 'pages/posts', `${slug.join('/')}.mdx`);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const { data, content } = await matter(fileContents);

  return {
    content,
    slug,
    meta: refinePostMeta(data),
  };
};
