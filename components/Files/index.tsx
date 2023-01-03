import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StructureItem, structure } from '~/structure';
import { TreeNodeProps, TreeDepth } from './types';
import styles from './files.module.css';
import { FileIcon, FolderIcon } from './styles';

export type Props = {
  defaultOpenDepth: number;
  item: StructureItem;
  path: number[];
};

export const RecursiveNode = ({ item, path, defaultOpenDepth }: Props) => {
  const isDefaultOpen = item.path.length <= defaultOpenDepth + 1;
  const router = useRouter();
  const asPathList = router.asPath.split('/');

  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const [isClicked, setIsClicked] = useState<number[]>([]);

  const currentClicked = (filePath: number[]) => {
    setIsOpen(!isOpen);

    return !isClicked.length
      ? setIsClicked(filePath && isClicked.concat(filePath))
      : setIsClicked([]);
  };

  if (!item.isFolder) {
    const isCurrentPage = asPathList.includes(item.name.split('.mdx')[0]);
    return (
      <Link href={`/${item.path.join('/')}`}>
        <button type="button" className="ml-4 flex items-center">
          <FileIcon />
          <span className={`${isCurrentPage ? 'text-accent-focus' : 'text-inherit'}`}>{item.name}</span>
        </button>
      </Link>
    );
  }

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
