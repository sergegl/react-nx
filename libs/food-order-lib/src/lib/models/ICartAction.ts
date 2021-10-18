export interface ICartAction {
  type: 'ADD' | 'REMOVE' | 'CLEAR';
  [key: string]: any;
}
