import { Filter } from './filter'

export interface ExpandedCourse {
  start: { hour: number; minute: number };
  end: { hour: number; minute: number };
  title: string;
  background: string;
  unavailable: boolean;
  blacklisted: boolean;
};

export type MinifiedCourse = [
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

export type MinifiedDay = MinifiedCourse[];
export type ExpandedDay = ExpandedCourse[];

export interface Store {
  [key: string]: MinifiedDay;
};

export interface MinifiedWeek {
  date: string; // date is a monday
  days: MinifiedDay[];
}

export function expandCourse(mini: MinifiedCourse) {
  const expanded: ExpandedCourse = {
    start: { hour: mini[0][0], minute: mini[0][1] },
    end: { hour: mini[1][0], minute: mini[1][1] },
    title: mini[2], background: mini[3],
    unavailable: false, blacklisted: false
  };

  if (expanded.title === null) {
    expanded.title = 'FERMÉ';
    expanded.unavailable = true;
  }
  else {
    expanded.blacklisted = Filter.filterElement(expanded);
  }

  return expanded;
}

export function expandDay(mini: MinifiedDay) {
  const expanded: ExpandedDay = [];

  for(const i in mini) {
    expanded[i] = expandCourse(mini[i]);
  }

  expanded.sort((a, b) => !a.blacklisted && b.blacklisted ? -1 : 0); // not blacklisted comes first (1 <=> b comes first)
  return expanded;
}
