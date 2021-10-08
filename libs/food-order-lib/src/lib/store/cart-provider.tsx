import { ICart } from '../models/ICart';
import { IMeal } from '../models/IMeal';
import CartContext from './cart-context';
import { useReducer } from 'react';
import { defaultCipherList } from 'constants';
import { ICartAction } from '../models/ICartAction';

/* eslint-disable-next-line */

export interface CartProviderProps {
  children?: React.ReactNode;
}

const defaultCartState: ICart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: ICart, action: ICartAction) => {
  switch (action.type) {
    case 'ADD': {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems: IMeal[];

      if (existingCartItem) {
        // updating existing

        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        // creating new
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case 'REMOVE': {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      let updatedItems: IMeal[];

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updateItem: IMeal = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updateItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    default:
      return defaultCartState;
  }
};

export function CartProvider(props: CartProviderProps) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: IMeal) => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    });
  };
  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    });
  };

  const cartContext: ICart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
