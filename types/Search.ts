export type View = "list" | "cards";

export function isView(value: string | undefined): value is View {
  return value === "list" || value === "cards";
}
