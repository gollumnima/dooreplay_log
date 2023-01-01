import { useState } from 'react';
import Link from 'next/link';
import { StructureItem, structure } from '~/structure';
import { TreeNodeProps, TreeDepth } from './types';
import styles from './files.module.css';
import { FileIcon, FolderIcon } from './styles';

const { fileIcon } = styles;

export type Props = {
  defaultOpenDepth: number;
  item: StructureItem;
  path: number[];
};

export const RecursiveNode = ({ item, path, defaultOpenDepth }: Props) => {
  const isDefaultOpen = item.path.length <= defaultOpenDepth + 1;
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const [isClicked, setIsClicked] = useState<number[]>([]);

  const currentClicked = (filePath: number[]) => {
    setIsOpen(!isOpen);

    return !isClicked.length
      ? setIsClicked(filePath && isClicked.concat(filePath))
      : setIsClicked([]);
  };

  if (!item.isFolder) {
    return (
      <Link href={`/${item.path.join('/')}`}>
        <button type="button" className="ml-4 flex items-center">
          <FileIcon />
          <span>{item.name}</span>
        </button>
      </Link>
    );
  }

  console.log(path.length, 'leng');

  return (
    <div className="ml-4">
      <div
        className="flex items-center"
        onClick={() => currentClicked(path)}
        onKeyDown={() => currentClicked(path)}
        role="button"
        tabIndex={0}
      >
        <FolderIcon flag={!!path.length} />
        <span>{item.name}</span>
        {/* // TODO: 클릭하면 해당 경로로 갈 수 있게 바꾸기 */}
      </div>
      {isOpen && (
        <div className="nav-tree-node-children">
          {item.children.map((child, i) => (
            <RecursiveNode
              key={child.name}
              item={child}
              defaultOpenDepth={defaultOpenDepth}
              path={path.concat(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
