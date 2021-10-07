export interface IInput {
  id?: string;
  type?: 'email' | 'text' | 'number';
  min?: string;
  max?: string;
  step?: string;
  defaultValue?: string;
}
