import { Actor } from './actor'

export interface Film {
  title:string;
  thumb:string;
  description:string;
  source:string;
  category:string;
  director:string;
  actors: Actor[];
}
