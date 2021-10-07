import { IMeal } from './IMeal';

export interface ICartAction {
  type: 'ADD' | 'REMOVE';
  item: IMeal;
}
