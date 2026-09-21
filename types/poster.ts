export type PosterTemplate =
  | "parchment"
  | "diary"
  | "minimal"
  | "dark"
  | "letter";

export interface PosterConfig {
  template: PosterTemplate;

  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;

  textColor: string;
  paperColor: string;

  paperWidth: number;
  paperPadding: number;

  showChapter: boolean;
  showDate: boolean;
  showAuthor: boolean;
}