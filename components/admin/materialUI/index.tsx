export default interface Column {
  id: "name" | "slug" | "img_url";
  label: string;
  minWidth?: number;
  align?: "center";
}

export const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "slug",
    label: "Slug",
    minWidth: 170,
    align: "center",
  },
  {
    id: "img_url",
    label: "Image",
    minWidth: 170,
    align: "center",
  },
];

export interface Column2 {
  id: "name" | "slug" | "img_url" | "delete";
  label: string;
  minWidth?: number;
  align?: "center";
}

export const columnsSecond: readonly Column2[] = [
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "slug",
    label: "Slug",
    minWidth: 170,
    align: "center",
  },
  {
    id: "img_url",
    label: "Image",
    minWidth: 170,
    align: "center",
  },
  { id: "delete", label: "Action", align: "center", minWidth: 170 },
];
