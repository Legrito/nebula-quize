export type ScreenTypeName = 'quiz' | 'info';
export type ScreenTypeTheme = 'light' | 'dark';

export interface ScreenType {
  name: ScreenTypeName;
  theme: ScreenTypeTheme;
}

export interface Option {
  value: string;
  nextSlug: string;
}

export interface Screen {
  slug: string;
  title: string;
  description: string;
  quotes: string;
  options: Option[];
  type: ScreenType;
  nextPage: string;
}
