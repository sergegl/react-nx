export interface ICartAction {
  type: 'ADD' | 'REMOVE';
  [key: string]: any;
}
