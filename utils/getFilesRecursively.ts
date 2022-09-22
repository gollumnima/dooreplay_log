import fs from 'fs';
import path from 'path';

export const getAllSubFolders = (
  baseFolder: string,
  folderList: string[] = [],
) => {
  const folders: string[] = fs
    .readdirSync(baseFolder)
    .filter((file) => fs.statSync(path.join(baseFolder, file)).isDirectory());

  folders.forEach((folder) => {
    folderList.push(path.join(baseFolder, folder));
    getAllSubFolders(path.join(baseFolder, folder), folderList);
  });
  return folderList;
};

export const getFilesInFolder = (rootPath: string) => fs
  .readdirSync(rootPath)
  .filter(
    (filePath) => !fs.statSync(path.join(rootPath, filePath)).isDirectory(),
  )
  .map((filePath) => path.normalize(path.join(rootPath, filePath)));

export const getFilesRecursively = (rootPath: string) => getAllSubFolders(rootPath)
  . reduce((result, folder) => [...result, ...getFilesInFolder(folder)], [] as string[]);
