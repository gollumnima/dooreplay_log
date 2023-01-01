const fs = require('fs');
const path = require('path');

// 폴더를 순회하며 mdx 파일과 폴더를 찾아서 반환.
const scan = (rootFilePath, parentPath, name) => {
  // 현재 노드의 파일 경로
  const currentPath = path.join(parentPath, name);

  // 실제로 외부에서 사용할때 쓸 경로
  const displayPath = currentPath
    .replace(/\..+$/, '')
    .split('/')
    .filter(Boolean);

  // 확장자와 점이 붙는지로 폴더여부 확인
  const isFolder = !name.match(/\..+$/);
  const isMdx = name.match(/\.mdx$/);

  // mdx 도 폴더도 아닌 경우 넘어감.
  if (!(isFolder || isMdx)) return null;

  // mdx 파일인 경우 파일 이름과 경로를 반환.
  // 단 경로에선 확장자를 제거한다.
  if (isMdx) {
    return {
      name,
      path: displayPath,
      isFolder,
    };
  }

  // 폴더인 경우 하위 폴더와 파일을 순회하며 재귀적으로 호출.
  const children = fs
    .readdirSync(path.join(rootFilePath, currentPath))
    .map((childName) => scan(rootFilePath, currentPath, childName))
    .filter(Boolean);
  return {
    name, path: displayPath, isFolder, children,
  };
};

const run = () => {
  // 현재 프로젝트의 루트 경로 (정확히 말하자면, cli 실행 경로)
  const cwd = process.cwd();

  // pages 폴더 경로
  const pagesDir = path.join(cwd, 'pages');

  // 출력할 파일 경로
  const jsonPath = path.join(cwd, 'structure.json');
  const tsFilePath = path.join(cwd, 'structure.ts');

  const dirs = scan(pagesDir, '.', 'posts');
  const json = JSON.stringify(dirs, null, 2);
  // fs.writeFileSync(jsonPath, JSON.stringify(dirs));
  fs.writeFileSync(jsonPath, json, 'utf-8');
  fs.writeFileSync(tsFilePath, `/* eslint-disable */
import { StructureItem } from './structure.types';
export type { StructureItem } from './structure.types';
export const structure: StructureItem = ${json};\n`, 'utf-8');
};

run();
