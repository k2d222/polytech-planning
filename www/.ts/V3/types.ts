export interface TStore {
  [key: string]: TMini[];
};

export type TExpanded = {
  start: { hour: number; minute: number };
  end: { hour: number; minute: number };
  title: string;
  background: string;
  unavailable: boolean;
  blacklisted: boolean;
};

export type TMini = [
  [
    number, // start hour
    number // start minute
  ],
  [
    number, // end hour
    number // end minute
  ],
  string, // title
  string // background
];

export interface TMiniStore {
  date: string;
  days: TMini[][];
};

export type TRequest = {} | {
  dateString: string;
  resolve: () => void;
  reject: () => void;
};

export interface TFilter {
  key: string;
  display: string;
  variable: { [key: string]: string; [key: number]: string };
  subfilters: TFilter[];
  whitelist?: string[];
  blacklist?: string[];
};
