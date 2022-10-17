import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';
import { getFilesRecursively } from './getFilesRecursively';

const files = getFilesRecursively(path.join(process.cwd(), 'pages')).filter((file) => file.match(/\.mdx$/));
export const getPosts = async () => {
  try {
    // promise 때문에 순서가 꼬일 수 있어서 all로 감싸기
    const allPostFiles = await Promise.all(files.map(async (fileName) => {
      const slug = fileName.replace('.mdx', '');
      const fileContents = await fs.readFile(
        `${slug}.mdx`,
        'utf8',
      );

      const { data } = await matter(fileContents);

      return {
        slug:
          slug.split('/pages')[1].split('/').slice(1),
        data,
      };
    }));

    return allPostFiles;
  } catch (err) {
    console.error(err);
    throw new Error((err as Error).message);
  }
};

export const getPost = async (slug: string[]) => {
  console.log(slug, 'getpost');
  try {
    const fileContents = await fs.readFile(path.join(process.cwd(), 'pages', `${slug}.mdx`), 'utf8');
    // const fileContents = await fs.readFile(path.join(`${slug}.mdx`), 'utf8');
    const { data, content } = await matter(fileContents);

    return {
      content,
      frontmatter: {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        ...data,
      },
    };
  } catch (err) {
    console.log('에러!!!!!');
    console.error(err);
    throw new Error('error');
  }
};
