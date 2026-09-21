export type PoetryCategory =
  | "love"
  | "heartbreak"
  | "life"
  | "motivation"
  | "success"
  | "healing";

export type PoetryMood =
  | "soft"
  | "deep"
  | "sad"
  | "hopeful"
  | "powerful";

export interface Poetry {
  id: string;
  title: string;
  poem: string;
  category: PoetryCategory;
  chapter: string;
  date: string;
  author: string;
  createdAt: string;
}