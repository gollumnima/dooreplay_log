interface TreeItem {
  title: string;
  sub: string;
}

export interface TreeData {
  title: string;
  sub?: (TreeItem | TreeData)[] | string;
}

export interface TreeDepth extends TreeData {
  path: number[];
}

export interface TreeNodeProps {
  sub: TreeData[];
}
