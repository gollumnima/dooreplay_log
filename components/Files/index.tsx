import { useState } from 'react';
import { TreeNodeProps, TreeDepth } from './types';
import styles from './files.module.css';

const { fileIcon } = styles;

const RecursiveNode = ({ title, sub, path = [] }: TreeDepth) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState<number[]>([]);

  const currentClicked = (filePath: number[]) => {
    setIsOpen(!isOpen);

    return !isClicked.length
      ? setIsClicked(filePath && isClicked.concat(filePath))
      : setIsClicked([]);
  };

  console.log(path, 'vpath');
  console.log(!!path.length, '뭘까');
  return (
    <div>
      {!!path.length
      && (
      <div
        className="flex items-center m-1.5"
        onClick={() => currentClicked(path)}
        onKeyDown={() => currentClicked(path)}
        role="button"
        tabIndex={0}
      >
        {path.length !== 3
          ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className={path.length === 1 ? 'inline-block w-5 h-5 mr-2 stroke-1 fill-current' : 'w-5 h-5 ml-2 mr-2 stroke-1 fill-current'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          )
          : (
            <svg
              className={`stroke-2 fill-current ml-4 mr-2 ${fileIcon}`}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              viewBox="0 0 511 511"
            >
              <path
                d="M454.962,110.751c-0.018-0.185-0.05-0.365-0.081-0.545c-0.011-0.06-0.016-0.122-0.028-0.182  c-0.043-0.215-0.098-0.425-0.159-0.632c-0.007-0.025-0.012-0.052-0.02-0.077c-0.065-0.213-0.141-0.421-0.224-0.625  c-0.008-0.021-0.015-0.043-0.023-0.064c-0.081-0.195-0.173-0.384-0.269-0.57c-0.016-0.031-0.029-0.063-0.045-0.094  c-0.093-0.173-0.196-0.339-0.301-0.504c-0.027-0.042-0.05-0.086-0.077-0.127c-0.103-0.154-0.216-0.3-0.33-0.446  c-0.037-0.048-0.07-0.098-0.109-0.145c-0.142-0.173-0.294-0.338-0.45-0.498c-0.015-0.015-0.027-0.031-0.042-0.046l-104-104  c-0.018-0.018-0.038-0.033-0.057-0.051c-0.156-0.153-0.317-0.301-0.486-0.44c-0.055-0.045-0.113-0.083-0.169-0.126  c-0.138-0.107-0.275-0.214-0.42-0.311c-0.051-0.034-0.105-0.062-0.156-0.095c-0.156-0.099-0.312-0.197-0.475-0.284  c-0.036-0.019-0.074-0.035-0.111-0.053c-0.181-0.093-0.365-0.183-0.554-0.262c-0.024-0.01-0.049-0.017-0.074-0.027  c-0.202-0.081-0.406-0.157-0.616-0.221c-0.027-0.008-0.054-0.013-0.081-0.021c-0.206-0.06-0.415-0.115-0.628-0.158  c-0.063-0.013-0.128-0.018-0.192-0.029c-0.177-0.031-0.354-0.062-0.536-0.08C344.001,0.013,343.751,0,343.5,0h-248  C73.72,0,56,17.72,56,39.5v432c0,21.78,17.72,39.5,39.5,39.5h320c21.78,0,39.5-17.72,39.5-39.5v-360  C455,111.249,454.987,110.999,454.962,110.751z M351,25.606L429.394,104H375.5c-13.509,0-24.5-10.99-24.5-24.5V25.606z M415.5,496  h-320C81.991,496,71,485.01,71,471.5v-432C71,25.99,81.991,15,95.5,15H336v64.5c0,21.78,17.72,39.5,39.5,39.5H440v352.5  C440,485.01,429.009,496,415.5,496z"
              />
            </svg>
          )}
          {/* // TODO: 클릭하면 해당 경로로 갈 수 있게 바꾸기 */}
        <span>{title}</span>
      </div>
      )}
      <div className="nav-tree-node-children">
        {!!sub && Array.isArray(sub)
          && (!path.length || isOpen)
          && sub.map((item, i) => (
            <RecursiveNode
              key={item.title}
              title={item.title}
              path={path.concat(i)}
              sub={item.sub}
            />
          ))}
      </div>
    </div>
  );
};

const Files = ({ sub }: TreeNodeProps) => (
  <RecursiveNode
    path={[]}
    title=""
    sub={sub}
  />
);

export default Files;
