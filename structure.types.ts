type BaseStructureItem = {
  name: string;
  path: string[];
  isFolder: boolean;
};

export type StructureItem =
| (BaseStructureItem & { isFolder: true; children: StructureItem[] })
| (BaseStructureItem & { isFolder: false });
