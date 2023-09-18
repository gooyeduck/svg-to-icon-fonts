export type IconsId =
  | "fill-2"
  | "fill-3"
  | "fill-4"
  | "fill-5"
  | "line-1"
  | "line-2"
  | "line-3"
  | "line-4"
  | "line-5";

export type IconsKey =
  | "Fill_2"
  | "Fill_3"
  | "Fill_4"
  | "Fill_5"
  | "Line_1"
  | "Line_2"
  | "Line_3"
  | "Line_4"
  | "Line_5";

export enum Icons {
  Fill_2 = "fill-2",
  Fill_3 = "fill-3",
  Fill_4 = "fill-4",
  Fill_5 = "fill-5",
  Line_1 = "line-1",
  Line_2 = "line-2",
  Line_3 = "line-3",
  Line_4 = "line-4",
  Line_5 = "line-5",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Fill_2]: "61697",
  [Icons.Fill_3]: "61698",
  [Icons.Fill_4]: "61699",
  [Icons.Fill_5]: "61700",
  [Icons.Line_1]: "61701",
  [Icons.Line_2]: "61702",
  [Icons.Line_3]: "61703",
  [Icons.Line_4]: "61704",
  [Icons.Line_5]: "61705",
};
