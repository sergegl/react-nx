import { IMeal } from './IMeal';

export interface ICart {
  items: IMeal[];
  totalAmount: number;
  addItem?: (item: IMeal) => void;
  removeItem?: (id: string) => void;
}
