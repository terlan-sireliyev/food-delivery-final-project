export default interface Column {
  id: "name" | "slug" | "img_url";
  label: string;
  minWidth?: number;
  align?: "center";
}

export const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "slug", label: "Slug", minWidth: 170, align: "center" },
  { id: "img_url", label: "Image", minWidth: 170, align: "center" },
];

export interface Column2 {
  id: "name" | "slug" | "img_url" | "delete" | "edit";
  label: string;
  minWidth?: number;
  align?: "center" | "left";
}

export const columnsSecond: Column2[] = [
  { id: "img_url", label: "Image URL", minWidth: 100, align: "left" },
  { id: "name", label: "Name", minWidth: 100, align: "left" },
  { id: "slug", label: "Slug", minWidth: 100, align: "left" },
  { id: "edit", label: "Edit", minWidth: 100, align: "left" },
];
